import React from "react";
import { motion } from "framer-motion";
import heartIcon from "../../assets/heart.png";
import CardSwipe from "./CardSwipe";
const Hero = ({heroRef}) => {
  return (
    <section ref={heroRef} className="mt-[80px] w-full">
      <div
        className={`main-conainer flex sm:flex-col lg:flex-row sm:h-[100vh] bg-whte text-black
      sm:p-0 md:px-20 xl:px:20  lg:px-2  lg:gap-3`}
      >
        <div
          className="herotextContainer flex sm:basis-3/5  lg:basis-3/5 sm:order-2 lg:order-1  
        sm:justify-center lg:justify-center lg:items-center sm:pt-10 lg:p-0"
        >
          <div className="flex flex-col sm:gap-5 lg:gap-10 basis-4/5 items-center xl:ml-[100px] lg:ml-0">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 3.0 }}
            >
              <span>
                <p className="flex justify-center items-center border-r-5 border-r-white text-black font-dancingScript sm:text-4xl lg:text-6xl ">
                  Keerthy <img className="flex sm:h-20 lg:h-28" src={heartIcon} alt="" /> Rajkamal
                </p>
              </span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 3.8 }}
            >
              <span>
                <p className="text-xl md:text-2xl lg:3xl font-playwriteCuba">
                  10 NOVEMBER 2024
                </p>
              </span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay:2.2 }}
            >
              <span>
                <p className=" p-2 overflow-hidden  border-r-white sm:text-5xl lg:text-7xl font-greatVibes">
                  Save The Date
                </p>
              </span>
            </motion.div>
          </div>
        </div>
        <div className="heroImageContainer relative flex sm:basis-2/5 lg:basis-2/5 sm:order-1 lg:order-2 items-center sm:pt-10 sm:px-3 lg:p-0 sm:justify-center lg:justify-normal">
          <motion.div
            className={`w-[70%] rounded-full 
               brightness-100 `}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 4.2, ease:"easeIn" }}
          >
            <CardSwipe/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
