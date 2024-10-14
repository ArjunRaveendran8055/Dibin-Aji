import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import pinkFlower from "../../assets/flowerPink.png";
const OurStory = ({ storiesRef }) => {
  const weddingDate = new Date("2024-11-10T11:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const controls = useAnimation(); // Controls for paragraphs
  const h2Controls = useAnimation(); // Controls for heading
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% is visible
    triggerOnce: false, // Trigger in and out
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      h2Controls.start("visible");
    } else {
      controls.start("hidden");
      h2Controls.start("hidden");
    }
  }, [controls, h2Controls, inView]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = weddingDate - now;

      if (timeRemaining < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(countdownInterval);
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [weddingDate]);

  // Variants for the heading animation (move from left)
  const headingVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -100, transition: { duration: 1 } },
  };

  // Variants for paragraph animation (fade in/out)
  const paragraphVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 50, transition: { duration: 1 } },
  };

  return (
    <section className="bg-white text-dark">
      <div className="max-w-7xl mx-auto px-2 lg:px-0 text-center">
        <div
          ref={storiesRef}
          className="heading-container flex flex-col items-center justify-center"
        >
          <motion.h2
            className="sm:text-5xl lg:text-7xl font-dancingScript text-darkblue mb-4 "
            initial="hidden"
            animate={h2Controls} // Control the heading animation based on visibility
            variants={headingVariants}
          >
            Our Story
            <div className="flex items-center lg:80 md:w-96">
              <div className="flex-grow border-t border-black"></div>
              <img src={pinkFlower} alt="" className="sm:w-8 md:w-12" />
              <div className="flex-grow border-t border-black"></div>
            </div>
          </motion.h2>
        </div>
        <motion.p
          ref={ref} // This will be tracked for visibility
          className=" sm:text-2xl md:text-3xl lg:text-4xl text-graylight font-dancingScript mb-8 tracking-wide"
          initial="hidden"
          animate={controls} // Control paragraph animations
          variants={paragraphVariants}
        >
          It all started with a smile, and from there, our journey together
          began. What began as a friendship grew into a love we never expected
          but always dreamed of. Now, we’re ready to start the next chapter of
          our lives, surrounded by those we love the most.
        </motion.p>

        <motion.p
          ref={ref} // Track visibility for the second paragraph
          className="sm:text-2xl md:text-3xl lg:text-4xl text-graylight font-dancingScript mb-8 tracking-wide"
          initial="hidden"
          animate={controls}
          variants={paragraphVariants}
        >
          On our wedding day, we want to celebrate not just our love story but
          the many stories of love and support that have brought us to this
          moment. Thank you for being a part of our journey.
        </motion.p>

        {/* Countdown */}
        <div className="bg-cover">
          <motion.div
            className="mt-12 backdrop:blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1 }}
          >
            <div className="sm:text-3xl lg:text-5xl  font-dancingScript mb-6 backdrop-blur">
              Don't Miss the Day !
            </div>
            <div className="flex justify-center sm:text-xl lg:gap-10 lg:text-5xl font-dancingScript space-x-8 text-">
              <div className="flex flex-col gap-3">
                <div className=" ">{timeLeft.days}</div>
                <div className=" font-Playfiar text-2xl">Days</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="  ">{timeLeft.hours}</div>
                <div className=" font-Playfiar text-2xl">Hours</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className=" ">{timeLeft.minutes}</div>
                <div className=" font-Playfiar text-2xl">Mins</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className=" te">{timeLeft.seconds}</div>
                <div className=" font-Playfiar text-2xl">Secs</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
