"use client"; //here is the directive for Next.js to ensure this module is client-side only
import React from "react";
//we are importing motion components for animation and custom animation variants
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const SecurityComponent = () => {
  return (
    // this is the main container with full viewport height and width, that centers its children both horizontally and vertically
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Web Security
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "} {/* the stylistic element to separate the words with a gradient*/}
          </span>
          Reliability
        </motion.div>
      </div>

      {/*this block contains icons or images related to the component's theme, placed slightly above the center*/}
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        {/*this is a container for images that act as clickable items or decorative elements*/}
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">HTTPS & SSL/TLS</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Enhancing site security with HTTPS and SSL/TLS protocols
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop //enables continuous replay
          muted //to ensure video is silent
          autoPlay //start playing as soon as it's ready
          playsInline //this ensures that the video does not automatically fullscreen on play
          preload="false" //this is one is to advise the browser does not preload the video
          className="w-full h-auto"
          src="/public_https.webm/"
        />
      </div>
    </div>
  );
};

export default SecurityComponent;
