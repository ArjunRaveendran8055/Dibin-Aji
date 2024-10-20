import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import pinkFlower from "../../assets/flowerPink.png";
const OurStory = ({ storiesRef }) => {
 
  return (
    <section className="bg-white text-dark sm:pt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 lg:px-0 text-center">
        <div
          ref={storiesRef}
          className="heading-container flex flex-col items-center justify-center"
        >
          <motion.h2
            className="sm:text-5xl lg:text-7xl font-greatVibes text-gradient py-2 text-darkblue mb-4 "
            initial={{ y: 250,scale:2, opacity: 0 }}
            whileInView={{ y: 0, scale:1, opacity: 1 }}
            viewport={{ once: true,  }}
            transition={{ type: "spring", stiffness: 20,  }}
            exit={{ y: 0, opacity: 1 }}
          >
            Welcome to Our New Journey
          
          </motion.h2>
        </div>
        <motion.p
          // This will be tracked for visibility
          className=" sm:text-2xl md:text-3xl lg:text-4xl text-graylight text-justify sm:px-1 font-dancingScript mb-8 tracking-wide"
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 30, delay:0.5 }}
        >
          It all started with a smile, and from there, our journey together
          began. What began as a friendship grew into a love we never expected
          but always dreamed of. Now, we’re ready to start the next chapter of
          our lives, surrounded by those we love the most.
        </motion.p>

        <motion.p
          // Track visibility for the second paragraph
          className="sm:text-2xl md:text-3xl lg:text-4xl text-graylight text-justify sm:px-1 font-dancingScript mb-8 tracking-wide"
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 30, delay:0.8}}
        >
          On our wedding day, we want to celebrate not just our love story but
          the many stories of love and support that have brought us to this
          moment. Thank you for being a part of our journey.
        </motion.p>
        
      </div>
    </section>
  );
};

export default OurStory;
