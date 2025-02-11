import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

function RespNavBar({ open }) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}  // Animation on mount
          animate={{ opacity: 1, y: 0 }}   // Animation when visible
          exit={{ opacity: 0, y: -100 }}    // Animation on unmount
          transition={{ duration: 0.4 }} 
            // Animation speed
            className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-sm font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col items-center gap-10">
              <li className='hover:text-secondary transition-transform duration-300 ease-in-out hover:scale-110'><a href="/">Home</a></li>
              <li className='hover:text-secondary transition-transform duration-300 ease-in-out hover:scale-110'><a href="#">Profile</a></li>
              <li className='hover:text-secondary transition-transform duration-300 ease-in-out hover:scale-110'><a href="#">Portfolio</a></li>
              <li className='hover:text-secondary transition-transform duration-300 ease-in-out hover:scale-110'><a href="#">Services</a></li>
              <li className='hover:text-secondary transition-transform duration-300 ease-in-out hover:scale-110'><a href="#">Testimonials</a></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default RespNavBar;
