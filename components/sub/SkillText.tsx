"use client" //the directive to ensure this module is only executed on the client-side in a Next.js environment
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion' //to import motion component from framer-motion for animations
import { SparklesIcon } from '@heroicons/react/24/solid'

//this is a functional component that displays animated text and icons
const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
          Next.js: Innovate Your Web Presence
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
       Developing Apps with Modern Solutions     
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
        Keep Every Task, Deadline, and Idea on Track    
        </motion.div>
    </div>
  )
}

export default SkillText