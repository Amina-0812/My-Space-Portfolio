"use client"; //I used the "use client" directive to ensure it only renders in the browser
//we have some components that may include logic or dependencies that only make sense on the client-side, such as direct interactions with the DOM or using window and document objects that aren’t available on the server. The use client directive ensures these components skip server rendering and only execute in the browser

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft,  slideInFromRight, slideInFromTop,} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    //this is the parent container for the hero section with the animation controls
    <motion.div
      initial="hidden" //initially state of the animation is set as hidden 
      animate="visible" //we are here animate it to visible state
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/*this is a container for text and intercactive elements centered with margin auto*/}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/*this is an animated container for the welcome message*/}
        <motion.div
          variants={slideInFromTop} //an animation for sliding in from the top
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> {/*those sparkles icon for visual flair*/}
          <h1 className="Welcome-text text-[13px]"> {/*this is a Welcome text with custom styling*/}
            Front End Developer Portfolio
          </h1>
        </motion.div>
        {/*the next container is for the main headline with a slide-in animation from the left*/}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "} {/*a highlighted text with gradient*/}
            </span>
            project exprience
          </span>
        </motion.div>
        {/*here is paragraph with personal introduction, also with slide-in effect*/}
        <motion.p
          variants={slideInFromLeft(0.8)} //a slightly longer delay for text entry
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
        Welcome to my corner of the digital universe!
        I&apos;m a physics enthusiast turned front-end web developer. 
        With a background in physics, I bring analytical thinking to my web projects, creating visually stunning and intuitive experiences.  
        </motion.p>
        {/* a call to action button with animation */}
        <motion.a
          variants={slideInFromLeft(1)} //an animation with a delay of 1 second
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
      {/* an animated image container that slides in from the right*/}
      <motion.div
        variants={slideInFromRight(0.8)} //this is a slide-in effect with a delay
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;