import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaMapLocation } from "react-icons/fa6";

const WeddingDetails = ({ timeLineRef }) => {
  
  const venueUrl =
    "https://www.google.com/maps/place/St.+Thomas+Kottakkavu+Forane+Church,+North+Paravur/@10.150558,76.218166,5068m/data=!3m1!1e3!4m6!3m5!1s0x3b081a795d8f53c3:0xf569a361d42788ee!8m2!3d10.1505581!4d76.218166!16s%2Fm%2F012w4fc5?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D";
  const homeUrl =
    "https://www.google.com/maps/place/10%C2%B009'21.8%22N+76%C2%B013'09.4%22E/@10.155949,76.219536,21z/data=!4m4!3m3!8m2!3d10.1560556!4d76.2192778?hl=en&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D";


  return (
    <section
      ref={timeLineRef}
      className="sm:pt-10 lg:pt-40 overflow-hidden"
    >
      <div className="mainImgDiv max-w-7xl mx-auto sm:px-2 lg:px-0 flex flex-col items-center">
        <div className="imgTextContainer flex sm:flex-col  w-full items-center sm:justify-center">
          <motion.div
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0,  opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 20 }}
            className="imgTitleContainer text-5xl font-greatVibes text-gradient p-2"
          >
            Engagement Details
          </motion.div>
          <motion.div
            initial={{ x: -250, scale: 2, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 20 }}
            className="imgIntroParaDiv sm:text-2xl lg:text-3xl font-dancingScript text-justify text-graylight sm:p-2  py-5"
          >
            The engagement ceremony will be a traditional ring exchange event,
            held in the presence of close family and friends. The couple will
            exchange rings, symbolizing their love and commitment, and marking
            the formalization of their engagement. Surrounded by warm wishes and
            blessings, this special moment will set the stage for their journey
            together as they prepare for their wedding.
          </motion.div>
          <div className="MapMainDiv w-full justify-between flex sm:flex-col lg:flex-row sm:pt-3 ">
            <div className="textContainerDiv flex flex-col sm:gap-5 lg:gap-10">
              <span className="sm:text-2xl lg:text-3xl font-semibold text-center">
                Manapurath House
              </span>
              <span className="flex flex-col ">
                <span className="date flex flex-row p-1 gap-2 items-center sm:text-xl lg:text-2xl font-normal">
                  <FaCalendarAlt size={25} />
                  08 November - 10 November 2024
                </span>
                <span className="time pl-10 text-lg">11:00 am - 01:30 pm</span>
              </span>
              <span className="flex flex-col">
                <span className="ExactLocation flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaLocationDot size={25} /> Cheriya PallamThuruth, North
                  Paravur
                </span>
                <span className="phoneHeading pl-10">Event Address</span>
              </span>
              <span className="flex flex-col">
                <span className="phoneNumber flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaPhoneAlt size={25} /> +91 6282008742
                </span>
                <span className="phoneHeading pl-10">Phone Number</span>
              </span>
            </div>
            <div className="mapContainer sm:p-2 lg:p-0 sm:mt-5 lg:mt-0 ">
              <div className="flex flex-col w-full h-full">
                <div className="font-black sm:text-xl lg:text-2xl flex w-full justify-end pb-10">
                  <button
                    onClick={() => window.open(homeUrl, "_blank")}
                    className="bg-white border border-black  hover:bg-gray-light transition-colors duration-300 text-black font-bold py-2 px-4 hover:shadow-lg rounded-xl inline-flex items-center"
                  >
                    <FaMapLocation className="text-blue w-6 h-6 mr-2" />
                    <span className="text-darkblue">Open Map</span>
                  </button>
                </div>
                <div className="sm:hidden lg:block ">
                  <iframe
                    className="rounded-lg flex sm:w-full h-[300px] lg:w-[650px] lg:h-[450px]"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.302255358872!2d76.21671507503329!3d10.15606798995746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA5JzIxLjgiTiA3NsKwMTMnMDkuNCJF!5e0!3m2!1sen!2sin!4v1727613422247!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.302255358872!2d76.21671507503329!3d10.15606798995746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA5JzIxLjgiTiA3NsKwMTMnMDkuNCJF!5e0!3m2!1sen!2sin!4v1727613422247!5m2!1sen!2sin"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="imgTextContainer lg:pt-20  flex sm:flex-col  w-full items-center sm:justify-center">
          <motion.div
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 20 }}
            className="imgTitleContainer text-5xl font-greatVibes text-gradient p-2"
          >
            Wedding Details
          </motion.div>
          <motion.div
            initial={{ y: 250, scale: 2, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 20 }}
            className="imgIntroParaDiv sm:text-2xl lg:text-3xl font-dancingScript text-justify text-graylight sm:p-2  py-5"
          >
            The wedding will be a beautiful evening ceremony, celebrated in the
            presence of family and friends. As they tie the knot, their love and
            commitment to one another will mark the beginning of their life
            together. Surrounded by the warm glow of the evening, this cherished
            moment will be filled with blessings, joy, and the heartfelt support
            of their loved ones. The evening celebration will culminate in a
            joyous union, setting the perfect tone for their new journey as
            husband and wife.
          </motion.div>
          <div className="MapMainDiv w-full justify-between flex sm:flex-col lg:flex-row ">
            <div className="textContainerDiv flex flex-col sm:gap-5 lg:gap-10">
              <span className="sm:text-2xl lg:text-3xl font-semibold text-center">
                Manapurath House
              </span>
              <span className="flex flex-col ">
                <span className="date flex flex-row p-1 gap-2 items-center sm:text-xl lg:text-2xl font-normal">
                  <FaCalendarAlt size={25} />
                  08 November - 10 November 2024
                </span>
                <span className="time pl-10 text-lg">11:00 am - 01:30 pm</span>
              </span>
              <span className="flex flex-col">
                <span className="ExactLocation flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaLocationDot size={25} /> Cheriya PallamThuruth, North
                  Paravur
                </span>
                <span className="phoneHeading pl-10">Event Address</span>
              </span>
              <span className="flex flex-col">
                <span className="phoneNumber flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaPhoneAlt size={25} /> +91 6282008742
                </span>
                <span className="phoneHeading pl-10">Phone Number</span>
              </span>
            </div>
            <div className="mapContainer sm:p-2 lg:p-0 sm:mt-5 lg:mt-0 ">
              <div className="flex flex-col w-full h-full">
                <div className="font-black sm:text-xl lg:text-2xl flex w-full justify-end ">
                  <button
                    onClick={() => window.open(homeUrl, "_blank")}
                    className="bg-white border border-black  hover:bg-gray-light transition-colors duration-300 text-black font-bold py-2 px-4 hover:shadow-lg rounded-xl inline-flex items-center"
                  >
                    <FaMapLocation className="text-blue w-6 h-6 mr-2" />
                    <span className="text-darkblue">Open Map</span>
                  </button>
                </div>
                <div className="sm:hidden lg:block ">
                  <iframe
                    className="rounded-lg flex sm:w-full h-[300px] lg:w-[650px] lg:h-[450px]"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.302255358872!2d76.21671507503329!3d10.15606798995746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA5JzIxLjgiTiA3NsKwMTMnMDkuNCJF!5e0!3m2!1sen!2sin!4v1727613422247!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.302255358872!2d76.21671507503329!3d10.15606798995746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA5JzIxLjgiTiA3NsKwMTMnMDkuNCJF!5e0!3m2!1sen!2sin!4v1727613422247!5m2!1sen!2sin"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
