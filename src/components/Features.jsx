import React from 'react';
import {features} from "../constants";
import { motion} from "framer-motion";
import image from "../assets/PrThumb.png"

function Features() {
  return (
    <div className='relative mt-16 lg:mt-20 min-h-[800px]'>
        <div className='text-center text-black mx-10 lg:mx-36'>
            <p> 
              5 Bites Entertainment is a digital content production house specializing in 2D animation, videography, and full-scale 3D 
              production. We bring stories to life with cutting-edge visuals, creative storytelling, and seamless execution across various 
              media. From brand content creation to immersive animations, we craft compelling digital experiences that captivate audiences.
            </p>
        </div>

        <div className='flex flex-wrap md:gap-4 lg:gap-32 mt-10 lg:mt-24 mx-6 lg:ml-32'>
            {features.map((feature, index) => (
                <motion.div
                 key={index} 
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{
                    ease: "linear",  // Ease-in-out timing function
                    duration: 0.6,      // Duration of the animation
                    delay: index * 0.1  // Delay for each element
                  }}
                 className='w-full sm:w-[48%] lg:w-[39%] sm:1/2'
                 >
                    <div className='flex mb-2 lg:mb-[-140px]'>
                        <div className='flex mx-4 h-10 w-10 pb-2 text-primary justify-center items-center rounded-full'>
                            {feature.icon && <feature.icon className="text-4xl" />}
                        </div>
                        <div>
                            <h5 className='mt-1 mb-6 text-lg font-semibold mr-4'>{feature.text}</h5>
                            <p className=' p-0.5 mb-20 text-neutral-500 text-justify pr-16 lg:pr-0'>{feature.description}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        <div>
            {/* Scroll-triggered animation for the title */}
            {/* <motion.h2
                className="text-black text-center font-bold pt-36 text-3xl"
                initial={{ opacity: 0, y: 100 }}  // Initially hidden and moved down
                whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up when in view
                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                transition={{ type: "easeInOut", duration: 0.8 }}
            >
                PROJECT HIGHLIGHTS
            </motion.h2> */}
            <h2 className="text-black text-center font-bold pt-36 text-3xl">
                PROJECT HIGHLIGTHS
            </h2>

            {/* Scroll-triggered animation for the image */}
            <motion.img
                src={image}
                alt="Project Highlight"
                className="pt-8 h-full w-full"
                initial={{ opacity: 0, y:100}}  // Initially hidden and moved down
                whileInView={{ opacity: 1, y:0}} // Fade in and slide up when in view
                viewport={{ once: true, amount: 0.2 }} // Trigger when 50% of the element is in view
                transition={{
                    ease: "linear",  // Ease-in-out timing function
                    duration: 0.7,      // Duration of the animation
                    delay: 0.5
                  }}
            />
        </div>

    </div>
  );
}

export default Features;
