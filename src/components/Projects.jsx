import React from "react";
import Card from "../components/UI/Card";
import arya from "../images/arya.png";
import weather from '../images/weather.png'
import utsah from '../images/utsah.png'
import hackisium from "../images/hackisium.png";

const Projects = () => {
  return (
    <div className="w-full mx-auto px-4 py-10 mt-32" id="projects">
      <h1 className="text-center text-5xl font-bold bg-clip-text text-transparent tracking-widest" style={{ WebkitTextStroke: '2px white' }}>PROJECTS</h1>

      <div className="relative flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title={"Aryasish Cinefliks"}
            image={arya}
            description={
              "A website showcasing the works of a creative photographer and video editor"
            }
            projectLink={"https://aryasish-cineflicks.netlify.app/"}
          />

          <Card
            title={"Weather App"}
            image={weather}
            description={
              "A robust weather tracking website build leveraging the Open Weather API"
            }
            projectLink={"https://weather-report2024.netlify.app/"}
          />

          <Card
            title={"Hackisium 1.0"}
            image={hackisium}
            description={
              "A website for college hackathon, where I was involved in the backend."
            }
            projectLink={"https://hackisium-1-0.vercel.app/"}
          />

          <Card
            title={"Utsah 2025"}
            image={utsah}
            description={
              "A team project for our college fest. I was involved in the frontend part"
            }
            projectLink={"https://www.utsah.fun/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
