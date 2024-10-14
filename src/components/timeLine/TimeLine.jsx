import React from "react";
import haldiIcon from "../../assets/haldi/haldiIcon.webp";
import sanIcon from "../../assets/haldi/sanIcon.webp";
import tyingIcon from "../../assets/haldi/tyingIcon.webp";
import recIcon from "../../assets/haldi/recIcon.webp";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const TimeLine = ({ timeLineRef }) => {
  const timelineVariants = {
    hidden: { opacity: 0, y: 100 }, // Initial hidden state (out of view)
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate in when visible
    exit: { opacity: 0, y: 100, transition: { duration: 0.6 } }, // Animate out when leaving view
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 100 }, // Start from the right
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate to center
    exit: { opacity: 0, y: 100, transition: { duration: 0.6 } }, // Exit to the right
  };

  return (
    <section
      ref={timeLineRef}
      className="w-full flex justify-center sm:mt-20 lg:mt-80"
    >
      <div className="main container flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={titleVariants}
          viewport={{ once: false, amount: 0.5 }}
          className="weddingTitle sm:text-4xl lg:text-5xl text-darkblue py-10 font-dancingScript"
        >
          Wedding Details
        </motion.div>

        <div className="timelineDiv w-full font-dancingScript text-graylight text-2xl ">
          <VerticalTimeline lineColor="lightgray" animate={false}>
            {/* First event */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  variants={timelineVariants}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-black   text-xl"
                >
                  <div className="w-full flex flex-col  sm:text-2xl items-end text-graylight font-dancingScript">
                    <div className="flex flex-col">
                      8th NOVEMBER, FRIDAY, 2024,
                      <span className="w-full flex text-xl justify-end">
                        7:00 PM
                      </span>
                      <span className="pt-2">Home</span>
                    </div>
                  </div>
                </motion.div>
              }
              iconStyle={{
                color: "#fff",
                backgroundImage: `url(${haldiIcon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.h3
                initial="hidden"
                whileInView="visible"
                exit="exit"
                variants={timelineVariants}
                viewport={{ once: false, amount: 0.5 }}
              >
                <span className="text-black">HALDI</span>
              </motion.h3>
            </VerticalTimelineElement>

            {/* Second event */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  variants={timelineVariants}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-black font-playwriteCuba text-xl"
                >
                  <div className="flex flex-col sm:text-2xl items-start text-graylight font-dancingScript">
                    <div className="flex flex-col">
                      NOVEMBER 9TH, FRIDAY, 2024
                      <span className="w-full flex text-xl justify-end">
                        {" "}
                        6:30 PM
                      </span>
                      <span className="flex">Home</span>
                    </div>
                  </div>
                </motion.div>
              }
              iconStyle={{
                color: "#fff",
                backgroundImage: `url(${sanIcon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.h3
                initial="hidden"
                whileInView="visible"
                exit="exit"
                variants={timelineVariants}
                viewport={{ once: false, amount: 0.5 }}
              >
                <span className="text-black">SANGEETH</span>
              </motion.h3>
            </VerticalTimelineElement>

            {/* Third event */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  variants={timelineVariants}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-black font-playwriteCuba text-xl"
                >
                  <div className="w-full flex flex-col  sm:text-2xl items-end text-graylight font-dancingScript">
                    NOVEMBER 10TH, SUNDAY, 2024,
                    <span className="w-full flex text-xl justify-end">
                      10:00 AM
                    </span>
                    <span className="pt-2 flex w-full justify-end">
                      Sree Krishna Temple, Kannankulanghara
                    </span>
                  </div>
                </motion.div>
              }
              iconStyle={{
                color: "#fff",
                backgroundImage: `url(${tyingIcon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.h3
                initial="hidden"
                whileInView="visible"
                exit="exit"
                variants={timelineVariants}
                viewport={{ once: false, amount: 0.5 }}
              >
                <span className="text-black">THALIKETTU</span>
              </motion.h3>
            </VerticalTimelineElement>

            {/* Fourth event */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  variants={timelineVariants}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-black font-playwriteCuba text-xl"
                >
                  <div className="flex flex-col sm:text-2xl items-start text-graylight font-dancingScript">
                    <div className="flex flex-col">
                      NOVEMBER 10TH, SUNDAY, 2024
                      <span className="w-full flex text-xl justify-end">
                        5.30 PM
                      </span>
                      <span className="flex pt-2">E.K.D Auditorium</span>
                    </div>
                  </div>
                </motion.div>
              }
              iconStyle={{
                color: "#fff",
                backgroundImage: `url(${recIcon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.h3
                initial="hidden"
                whileInView="visible"
                exit="exit"
                variants={timelineVariants}
                viewport={{ once: false, amount: 0.5 }}
              >
                <span className="text-black">RECEPTION</span>
              </motion.h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
