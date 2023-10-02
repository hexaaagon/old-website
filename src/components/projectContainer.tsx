import Image from "next/image";
import * as Icon from "react-feather";

interface data {
  name: string;
  description: string;
  thumbnail: string;
  url: string | null;
  moreInfo: {
    lang: string;
    duration: string;
    team: string;
    publishDate: string;
    buttonName: string;
  };
}

export default function container(data: data) {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-[24rem] sm:max-w-[32rem] md:max-w-[48rem]">
      <Image
        src={data.thumbnail}
        alt="Project 1"
        height={1024}
        width={2048}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl text-gray-950 dark:text-gray-100 font-bold mb-2">{data.name}</h2>
        <p className="text-gray-900 dark:text-gray-400">{data.description}</p>
        <div className="mt-4 text-black dark:text-white">
          <p>
            <strong>Language:</strong> {data.moreInfo.lang}
          </p>
          <p>
            <strong>Duration:</strong> {data.moreInfo.duration}
          </p>
          <p>
            <strong>Team:</strong> {data.moreInfo.team}
          </p>
          <p>
            <strong>Publish Date:</strong> {data.moreInfo.publishDate}
          </p>
        </div>
        {typeof data?.url === "string" ? (
          <a href={data.url} target="_blank">
            <button
              className={`cursor-pointer mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none inline-block transition duration-150`}
            >
              <div className="flex items-center">
                <Icon.ExternalLink className="mr-2" size={16} />
                <span>{data.moreInfo.buttonName}</span>
              </div>
            </button>
          </a>
        ) : (
          <>
            <button
              className={`cursor-not-allowed mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded focus:outline-none inline-block transition duration-150`}
            >
              <div className="flex items-center">
                <Icon.ExternalLink className="mr-2" size={16} />
                <span>{data.moreInfo.buttonName}</span>
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
