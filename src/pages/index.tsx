/* eslint-disable react/no-unescaped-entities */
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import axios from "axios";
import React from "react";

import Typewriter from "typewriter-effect";
import Background from "../../public/background.png";

import style from "../styles/home.module.css";
import * as Icon from "react-feather";
import { ScrollToTop } from "../components/scrollToTop";

import Navbar from "../components/navbar";
import Skills from "../components/skills";
import Discord from "../components/discord";
import ProjectContainer from "../components/projectContainer";

export default function Home() {
  return (
    <div>
      <ScrollToTop />
      <a id="home"></a>
      <div className="inset-0 sticky top-0 z-50">{Navbar}</div>

      <div className="leading-0 bg-center bg-no-repeat bg-cover max-h-[93.8vh] flex items-center justify-center h-screen z-0 height-[100%] bg-[url(https://cdn.discordapp.com/attachments/1109053310025084979/1126735092375617576/image.jpeg)] dark:bg-[url(https://cdn.discordapp.com/attachments/1109053310025084979/1126810110795206656/q66jbqzny2781.png)]"></div>

      <div className="absolute inset-0 z-40 flex items-center justify-center h-screen text-blue-950 dark:text-sky-600">
        <div className="leading-[2rem]">
          <div className="flex justify-center">
            <p className="scale-[200%]">Hello there 👋</p>
          </div>
          <div className="scale-[150%] justify-center">
            <Typewriter
              options={{
                strings: [
                  "",
                  "Welcome to Hexagonn Website!",
                  "",
                  "I'm a Junior Developer.",
                  "I'm a Back-end Developer.",
                  "I'm from Indonesia!.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-bl from-white via-slate-300 to-slate-700 dark:from-slate-900 dark:via-slate-800 dark:to-slate-500 dark:text-white leading-[1.5rem]">
        <div className="mx-8 lg:mx-[24vh]">
          <a className="absolute -translate-y-12" id="aboutme"></a>
          <br />
          <br />
          <div className="flex justify-center">
            <p className="text-3xl">About Me</p>
          </div>
          <br />
          <div className="flex justify-center">
            <div className="indent-8 text-sm max-w-2xl lg:text-base">
              <Typewriter
                options={{
                  strings:
                    "Hello there! I'm Bagas, but you might also know me as Scoooolzs or Hexagonn. I'm a 13-year-old programmer with a passion for coding. My journey in the world of programming began in 2019 when I first delved into scripting. Since then, I've been honing my skills, and one of my favorite projects has been creating Discord bots.",
                  autoStart: true,
                  delay: 15,
                }}
              />
            </div>
          </div>
          <br />
          <Discord />
          <br />
          <div>
            <div className="flex justify-center">
              <p className="text-3xl">Skills</p>
            </div>
            <br />
            <div className="flex justify-center items-center text-center">
              <div>{Skills}</div>
            </div>
          </div>
          <br />

          <div className="flex justify-center">
            <p className="text-3xl">Projects</p>
          </div>
          <div className="flex justify-center items-center mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {ProjectContainer({
                name: "Hexagonn Website",
                description:
                  "This website. Funfact; This web is published during my Birthday!",
                thumbnail:
                  "https://cdn.discordapp.com/attachments/1130116712549847142/1135435921601347704/image.png",
                url: null,
                moreInfo: {
                  lang: "NextJS, NodeJS, Javascript, Typescript, ExpressJS.",
                  duration: "1 Month",
                  team: "Solo Project",
                  publishDate: "02 August 2023",
                  buttonName: "Visit Website",
                },
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <p className="text-2xl text-dark dark:text-white">
            <br />
            <br />
            <br />
            <br />
            <br />
            Contact blum jadi karna ngejar dedlain
            <p className="text-lg">Target: 10 Agustus</p>
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <a className="absolute -translate-y-12" id="contact"></a>
        </div>
      </div>
    </div>
  );
}
