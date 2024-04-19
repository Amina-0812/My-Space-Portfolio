"use client" //this the use client directive that tells Next.js to only execute this module on the client-side

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer' //this is a custom hook to check if the component is within the viewport
import Image from 'next/image';

//here we are defining a typescript interface for component props
interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

//this is a functional component with destructed props
const SkillDataProvider = ({ src, width, height, index} : Props) => {
    //setup the intersection observer to manage visibility of the component
    const {ref, inView} = useInView({
        triggerOnce: true //to ensure the animation that only plays when the component first comes into view
    })

    //this one is to define the animation states for the component using variants
    const imageVariants = {
        hidden: {opacity: 0}, //to start with the component fully transparent
        visible: {opacity: 1} //and here is the end with the component fully opaque
    }

    const animationDelay = 0.3
  return (
  <motion.div
  ref={ref}
  initial="hidden"
  variants={imageVariants}
  animate={inView ? "visible" : "hidden"}
  custom={index}
  transition={{delay: index * animationDelay}}
  >
    <Image
src={src}
width={width}
height={height}
alt='skill image'
    />
  </motion.div>
  )
}

export default SkillDataProvider