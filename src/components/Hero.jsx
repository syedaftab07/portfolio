import { HERO_CONTENT } from "../constants";
import { ABOUT_TEXT } from "../constants";
import profile_pic from "../assets/SyedAftab.png";
import { motion } from "motion/react"
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt16 lg:text-8xl">
              Syed Aftab
            </h1>

            <span className="bg-gradient-to-tr from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Aspiring Web Developer and Data Scientist
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter ">
              {HERO_CONTENT} <p>{ABOUT_TEXT}</p>{" "}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profile_pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
