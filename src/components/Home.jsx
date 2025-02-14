import React from 'react'
import { motion} from "framer-motion";

function Home() {
    return (
      <main className="bg-bannerImg bg-no-repeat bg-cover bg-center w-full h-full">
        <section className="min-h-[550px]">
          <div className="text-lightOrange pt-36 md:pt-15 lg:pt-28">
            {/* First Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 35, delay: 0.8 }}
              className="text-4xl sm:text-4xl md:text-8xl leading-tight mt-[2rem] text-center pt-4 font-varela"
            >
              <span className="text-primary">FIVE</span>
              <span className="text-white px-2 font-extrabold">BITES</span>
            </motion.h1>
  
            {/* Second Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 35, delay: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl leading-tight tracking-widest text-center pt-[5px] font-varela"
            >
              <span className="text-white px-2 font-bold">ENTERTAINMENT</span>
            </motion.h1>
  
            {/* Third Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 30, delay: 0.7 }}
              className="text-xl sm:text-2xl md:text-4xl leading-tight tracking-widest text-center pt-8"
            >
              <span className="text-white">INNOVATE. CREATE. INSPIRE!</span>
            </motion.h1>
          </div>
        </section>
      </main>     
    );
  }
  
  export default Home;
  