import { useState, useEffect } from "react";
import Image from "next/image";
import { Skeleton, SkeletonFull } from "../components/skeleton";
import axios, { AxiosResponse } from "axios";
import SpotifyImg from "../../public/spotify.png";

import * as Icon from "react-feather";

import moment from "moment";
require("moment-duration-format");

interface lanyard {
  fullData: {
    kv: any;
    spotify: {
      track_id: string;
      timestamps: {
        start: number;
        end: number;
      };
      album: string;
      album_art_url: string;
      artist: string;
      song: string;
    };
    discord_user: {
      id: string;
      username: string;
      avatar: string;
      discriminator: string;
      bot: boolean;
      global_name: string;
      avatar_decoration: string | null;
      display_name: string;
      public_flags: number;
    };
    activities: Array<{}>;
    discord_status: string;
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
  };
  avatarURL: string;
  status: any;
  customStatus: any;
  spotifyData: {
    totalDuration: number;
    durationNow: number;
    percent: number;
  };
}

function formatSec(seconds: number): string {
  const minutes: number = Math.floor(seconds / 60);
  const remainingSeconds: number = seconds % 60;

  const formattedMinutes: string = (minutes < 10 ? "0" : "") + minutes;
  const formattedSeconds: string =
    (remainingSeconds < 10 ? "0" : "") + remainingSeconds;

  return `${formattedMinutes}:${formattedSeconds}`;
}

export function FetchDiscordData() {
  const [discordData, setDiscordData] = useState<lanyard | undefined>(
    undefined
  );

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.lanyard.rest/v1/users/465454937267240962",
    }).then((data: AxiosResponse) => {
      setDiscordData(data.data.data);
    });
  }, []);

  return discordData;
}

export default function Discord() {
  const [discordData, setDiscordData] = useState<lanyard | undefined>(
    undefined
  );
  const [timestampNow, setTimestamp] = useState<number>(Date.now());

  const discordStatus = {
    // not gonna use
    online: {
      color: "green-500",
      status: "Online",
    },
    idle: {
      color: "orange-500",
      status: "Idling",
    },
    dnd: {
      color: "red-600",
      status: "Do not Disturb",
    },
    offline: {
      color: "slate-400",
      status: "Offline",
    },
  };

  useEffect(() => {
    setInterval(() => setTimestamp(Date.now()), 1000);

    updateDiscordData();
    setInterval(() => updateDiscordData(), 3000);

    function updateDiscordData() {
      axios({
        method: "GET",
        url: "https://api.lanyard.rest/v1/users/465454937267240962",
      })
        .then((body: AxiosResponse) => {
          const isCustomStatusAvailable = body.data.data.activities.find(
            (data: any) => data.type === 4
          );

          let spotifyData: {
            totalDuration: number;
            durationNow: number;
            percent: number;
          };

          if (body.data.data.listening_to_spotify) {
            const totalDuration = Math.floor(
              (body.data.data.spotify.timestamps.end -
                body.data.data.spotify.timestamps.start) /
                1000
            );
            const durationNow = Math.floor(
              (Date.now() - body.data.data.spotify.timestamps.start) / 1000
            );

            const percent = Math.floor((100 * durationNow) / totalDuration);

            spotifyData = { totalDuration, durationNow, percent };
          }

          setTimeout(() => {
            setDiscordData({
              fullData: body.data.data,
              avatarURL: `https://cdn.discordapp.com/avatars/${body.data.data.discord_user.id}/${body.data.data.discord_user.avatar}?size=4096`,
              status:
                discordStatus[
                  body.data.data.discord_status as keyof typeof discordStatus
                ],
              customStatus: isCustomStatusAvailable ?? null,
              spotifyData,
            });
          }, 3000);
        })
        .catch((err) => true);
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div
        id="trigger tailwind"
        className="text-green-500 text-orange-500 text-red-600 text-slate-400"
      ></div>
      <div className="w-48 md:h-full md:w-full">
        {discordData ? (
          <div className="ring-sky-600 dark:ring-sky-200 ring-2 max-w-md mx-auto bg-gradient-to-br from-slate-300 to-slate-500 dark:from-slate-800 dark:to-slate-500 rounded-xl shadow-md overflow-hidden md:max-w-32">
            <div className="md:flex">
              <div className="md:shrink-0 flex justify-center items-center my-3 mx-3 md:my-2 md:mx-2">
                <Image
                  src={discordData.avatarURL}
                  height={4096}
                  width={4096}
                  className="rounded-md h-32 w-32"
                  alt="Discord Profile"
                />
              </div>
              <div className="px-8 pb-4">
                <div className="text-slate leading-[1rem] md:translate-y-4">
                  <p className="text-2xl font-semibold -translate-y-2 md:-translate-y-2">
                    {discordData.fullData.discord_user.global_name}
                  </p>
                  <p className="text-sm font-light -translate-y-3 md:-translate-y-4">
                    {discordData.fullData.discord_user.username}
                  </p>
                  {discordData.customStatus ? (
                    <p className="text-md text-ellipsis overflow-hidden max-w-[128px] md:max-w-[256px] max-h-[5rem] whitespace-nowrap">
                      Status:
                      <br />
                      {discordData.customStatus?.emoji?.name
                        ? `${discordData.customStatus?.emoji?.name} | `
                        : ""}
                      {discordData.customStatus.state}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            {discordData?.fullData.listening_to_spotify ? (
              <>
                <hr />
                <div className="md:flex">
                  <div className="md:shrink-0 flex justify-center items-center my-3 mx-3 md:my-2 md:mx-2">
                    <Image
                      src={discordData.fullData.spotify.album_art_url}
                      height={4096}
                      width={4096}
                      className="rounded-md h-32 w-32 ring-2 ring-green-500"
                      alt="Album Image"
                    />
                    <Image
                      src={SpotifyImg}
                      height={28}
                      width={28}
                      className="absolute translate-y-[3.7rem] translate-x-[3.7rem]"
                      alt="Spotify Image"
                    />
                  </div>
                  <div className="px-8 pb-4">
                    <div className="text-white leading-[6px] md:translate-y-4">
                      <p className="text-lg font-semibold text-green-700 dark:text-green-500 text-ellipsis overflow-hidden max-w-[10rem] max-h-[2rem] md:max-w-[16rem]">
                        {discordData.fullData.spotify.song}
                      </p>
                      <p className="text-sm font-light text-ellipsis overflow-hidden max-w-[10rem] max-h-[1rem] md:max-w-[20rem]">
                        by{" "}
                        <span className="text-green-800 dark:text-green-600">
                          {discordData.fullData.spotify.artist}
                        </span>
                      </p>
                      <div className="text-sm font-light text-ellipsis overflow-hidden max-w-[10rem] max-h-[1.5rem] md:max-w-[20rem]">
                        on{" "}
                        <span className="text-green-800 dark:text-green-600">
                          {discordData.fullData.spotify.album}
                        </span>
                      </div>
                      <div className="invisible md:visible translate-y-2 w-[16rem]">
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                          <div
                            className={`bg-blue-600 h-1.5 rounded-full dark:bg-blue-500`}
                            style={{
                              width: `${discordData.spotifyData.percent}%`,
                            }}
                          ></div>
                        </div>
                        <p className="-translate-y-4 absolute left-0 text-xs">
                          {formatSec(discordData.spotifyData?.durationNow)}
                        </p>
                        <p className="-translate-y-4 absolute right-0 text-xs">
                          {formatSec(discordData.spotifyData?.totalDuration)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={`https://open.spotify.com/track/${discordData.fullData.spotify.track_id}`}
                  target="_blank"
                  className="w-full"
                >
                  <div className="flex justify-center items-center bg-gray-300 hover:bg-gray-500 dark:bg-gray-600 p-4 dark:hover:bg-gray-800 ease-in-out duration-100 text-sm md:text-base">
                    <Icon.ExternalLink
                      size={64}
                      className="h-[3rem] w-[3rem] md:h-[1.5rem] md:w-[1.5rm]"
                    />
                    <p className="p-2"> </p>Click to Listen this song in
                    Spotify!
                  </div>
                </a>
              </>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
