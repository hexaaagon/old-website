import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMariadb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVisualstudiocode,
} from "@icons-pack/react-simple-icons";

const skills = (
  <div className="grid grid-cols-3 md:grid-cols-6 gap-3 overflow-hidden p-2">
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#339933]"
      title="Node.js"
    >
      <SiNodedotjs size={25} />
    </div>
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#F7DF1E]"
      title="JavaScript"
    >
      <SiJavascript size={25} />
    </div>
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#3178C6]"
      title="TypeScript"
    >
      <SiTypescript size={25} />
    </div>
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#61DAFB]"
      title="React"
    >
      <SiReact size={25} />
    </div>
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#000000]"
      title="Next.js"
    >
      <SiNextdotjs size={25} />
    </div>
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#E34F26]"
      title="HTML5"
    >
      <SiHtml5 size={25} />
    </div>
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#1572B6]"
      title="CSS3"
    >
      <SiCss3 size={25} />
    </div>
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#06B6D4]"
      title="Tailwind CSS"
    >
      <SiTailwindcss size={25} />
    </div>
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#007ACC]"
      title="Visual Studio Code"
    >
      <SiVisualstudiocode size={25} />
    </div>
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#003B57]"
      title="SQLite"
    >
      <SiSqlite size={25} />
    </div>
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#003545]"
      title="MariaDB"
    >
      <SiMariadb size={25} />
    </div>
    <div
      className="p-3 shadow rounded-md bg-gray-400 ease-in-out duration-500 hover:scale-[120%] hover:bg-[#E95420]"
      title="Ubuntu Server"
    >
      <SiUbuntu size={25} title="Ubuntu Server" />
    </div>
  </div>
);

export default skills;
