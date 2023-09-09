import React, { useState } from "react";
import { FetchDiscordData } from "@/components/discord";
import * as Icon from "react-feather";
import Image from "next/image";
import Profile from "../../public/profile.jpeg";
import { useSearchParams } from "next/navigation";

import axios from "axios";

export default function Contact() {
  const [message, setMessage] = useState<string>("");
  const [isSended, setIsSended] = useState<boolean>(false);
  const [isProceedDone, setIsProceedDone] = useState<boolean>(false);

  const searchParams = useSearchParams();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      axios({
        url: "https://contact.api.hexagonn.my.id/hexagn/anonym_message",
        method: "POST",
        data: {
          message: message,
        },
      }).then(() => setIsProceedDone(true));

      setMessage("");
      setIsSended(true);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return isSended ? (
    <div className="bg-gradient-to-br from-gradient1_A to-gradient1_B flex justify-center items-center h-screen text-stone-200">
      <div className="text-white bg-black flex justify-center items-center shadow-md rounded-lg p-4 w-3/4 sm:w-[480px] space-y-8">
        {isProceedDone ? (
          <p>The message you sent has been sended!</p>
        ) : (
          <div>
            <p>The message you sent has been proceed.</p>
            <p className="font-medium">
              Please don{"'"}t leave this website until this message is updated.
            </p>
          </div>
        )}
      </div>
      {isProceedDone ? (
        <button
          onClick={() => {
            setIsSended(false);
            setIsProceedDone(false);
          }}
          className="absolute bottom-3 ring-2 ring-black bg-black h-12 w-48 rounded-md hover:scale-[110%] hover:bg-sky-600 transition duration-300"
        >
          <div className="flex justify-center items-center space-x-4">
            <Icon.RefreshCw />
            <p>Send again</p>
          </div>
        </button>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <div className="bg-gradient-to-br from-gradient1_A to-gradient1_B flex justify-center items-center h-screen text-stone-200">
      <form
        onSubmit={handleSubmit}
        className="h-full w-full flex justify-center items-center"
      >
        <div id="container" className="flex w-5/6 lg:w-anonym h-64">
          <div className="w-full">
            <div className="h-14 bg-black rounded-t-lg shadow-md">
              <div className="px-4 py-1 flex items-center translate-y-2 space-x-2">
                <div>
                  <Image
                    src={Profile}
                    alt="Avatar"
                    height={1024}
                    width={1024}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </div>
                <div className="-translate-y-1 -space-y-1">
                  <p className="text-lg text-bold">@Scoooolzs</p>
                  <p className="text-xs">Isi dong mang</p>
                </div>
              </div>
            </div>
            <textarea
              name="question"
              id="question"
              placeholder="Send me anonym Messages!"
              className="bg-stone-800 h-[216px] min-h-[216px] max-h-[216px] w-full rounded-b-lg shadow-md opacity-75 py-2 px-4"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
              maxLength={620}
            ></textarea>
          </div>
        </div>
        {message !== "" ? (
          <button
            type="submit"
            className="absolute bottom-3 ring-2 ring-black bg-black h-12 w-32 rounded-md hover:scale-[110%] hover:bg-sky-600 transition duration-300"
          >
            <div className="flex justify-center items-center space-x-2">
              <Icon.Send />
              <p>Send</p>
            </div>
          </button>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}
