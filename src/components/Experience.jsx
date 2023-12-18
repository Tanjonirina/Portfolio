import React from "react";
import Html from "../assets/image/pngwing.com (1).png";
import css from "../assets/image/pngwing.com (2).png";
import Python from "../assets/image/pngwing.com (3).png";
import react from "../assets/image/react.svg";
import Larvel from "../assets/image/laravel.svg";
import Tailwindcss from "../assets/image/tailwind.png";
import Github from "../assets/image/github.svg";
import Boostrap from "../assets/image/bootstrap-plain-wordmark.svg";
import Javascript from "../assets/image/javascript-js.svg";

export default function Experience() {
  const Experience = [
    {
      id: 1,
      src: Larvel,
      title: "Laravel",
      style: "shadow-red-600",
    },
    {
      id: 2,
      src: react,
      title: "React",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: Github,
      title: "Github",
      style: "shadow-green-800",
    },
    {
      id: 4,
      src: Tailwindcss,
      title: "Tailwind-css",
      style: "shadow-teal-400",
    },
    {
      id: 5,
      src: Python,
      title: "Python",
      style: "shadow-indigo-500",
    },
    {
      id: 6,
      src: Javascript,
      title: "Javascript",
      style: "shadow-yellow-400",
    },
    {
      id: 6,
      src: Html,
      title: "Html",
      style: "shadow-orange-400",
    },
    {
      id: 7,
      src: css,
      title: "CSS",
      style: "shadow-teal-200",
    },
    {
      id: 8,
      src: Boostrap,
      title: "Boostrap",
      style: "shadow-purple-400",
    },
  ];
  return (
    <section
      id="competence"
      className="bg-gradient-to-b from-gray-700 to-black text-white"
    >
      <div className="text-center  w-full h-full ">
        <h3 className="text-4xl font-semibold ">
          Com<span className="text-orange-400">pétence</span>{" "}
        </h3>
      </div>
      <br />

      <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 ">
        {Experience.map(({ id, src, title, style }) => {
          return (
            <div
              key={id}
              className={`shadow-md shadow-gray-600 rounded-lg ${style}`}
            >
              <img
              alt=""
                src={src}
                className="rounded-md duration-200 hover:scale-105 w-20 mx-auto"
              />
              <p className="mt-4 text-center">{title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
