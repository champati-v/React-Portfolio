import React from "react";
import logo from "../images/logo.png";
import { ArrowUpRight } from "lucide-react";
import react from "../images/react.png";
import { skills } from "../../data";

const About = () => {


  const handleConnect = () => {
    window.open("https://www.linkedin.com/in/vchampati/", "_blank");
  }

  return (
    <div className="w-full h-screen mx-auto px-4 py-10" id="about">
      <h1
        className="text-center text-5xl font-bold bg-clip-text text-transparent tracking-widest uppercase"
        style={{ WebkitTextStroke: "2px white" }}
      >
        About Me
      </h1>
      <div className="relative flex justify-center mt-8">
        <div className="flex flex-col p-4 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 cursor-pointer w-4xl">
          <p className="text-sm lg:text-[16px]">
            I am a passionate Frontend Developer with keen interest in building
            responsive and scalable frontend web applications. I have experience
            in building web applications using React, Next.js, Tailwind CSS,
            Node.js, Express.js, and MongoDB. With my skills and passion in
            Frontend Development, I can create modern and responsive web
            applications.
          </p>

          <div className="flex space-x-5 mt-8">
            <div className="flex flex-col">
              <h1 className="text-5xl">
                5<span className="text-blue-400">+</span>{" "}
              </h1>
              <p className="text-sm">
                Projects <br /> Completed
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 mt-8">
            <h1 className="text-4xl underline">Experience</h1>
            <span className="italic">
              Frontend Developer Intern @ Founders Hub Network (March 2025 - May
              2025)
            </span>
            <ul className="list-disc px-3">
              <li>
                Developed interactive and responsive user interfaces using
                Next.Js, Tailwind CSS, and RESTful APIs, optimizing real time
                data rendering and interactivity.{" "}
              </li>
              <li>
                Implemented User Authentication using Auth0 and integrated Web3
                wallet connectivity via RainbowKit (Wagmi) to enable secure
                login and blockchain-based identity features.{" "}
              </li>
              <li>
                Tested API endpoints using Postman and integrated them with the
                frontend, followed by version control best practices with Git &
                GitHub for streamlined team collaboration.{" "}
              </li>
              <li>
                Collaborated closely with Backend and UI/UX teams to align API
                design, data flow, and interface consistency, ensuring a smooth
                and efficient development workflow.{" "}
              </li>
            </ul>
          </div>

          <div className="flex justify-between items-center">
            <button onClick={handleConnect} className="flex items-center cursor-pointer gap-2 mt-8 bg-amber-50 hover:bg-amber-100 text-zinc-950 px-2 py-1 rounded-md ">
              Let's Connect! <ArrowUpRight />
            </button>
            <img src={logo} alt="logo" className="w-12 h-12 mt-6" />
          </div>
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="mt-8 w-4xl">
          <h1 className="text-3xl">Skills | Tools</h1>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {skills.map((item, index) => (
              <div className="border border-zinc-400 p-1 rounded-md">
                <div
                  key={index}
                  className="flex items-center gap-2 bg-zinc-800 p-2 rounded-md hover:bg-zinc-600 transition-colors duration-300 cursor-pointer"
                >
                  <img src={item.icon} alt="" />
                  <h1>{item.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
