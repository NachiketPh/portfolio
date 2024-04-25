import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
// import aboutImage from "../assets/img/about.png";
// import {  about } from "../assets";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      <div className="w-full flex items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52 "
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text  bg-gradient-to-r from-primary to-secondary">
            About
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full flex items-center justify-center px-8">
          {/* <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img
              src={about}
              className="w-full rounded-md  object-contain  h-auto "
              alt=""
            />
            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from-primary to-secondary rouded-md blur-[5px] -z-10"></div>
          </div> */}
        </div>
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className=" text-texlight text-base tracking-wide text-justify ">
            <h2 className="text-red-300">Welcome to my portfolio website! </h2>{" "}
            <br />I am a dedicated computer engineering student at Datta Meghe
            College of Engineering, passionate about innovation and technology.
            My journey into web development began with an enriching internship
            at Let's Grow More, where I honed my skills and gained practical
            experience in building dynamic websites.
          </p>
          <p className="text-base text-texlight tracking-wide text-justify ">
            Proficient in Python, C, React, and backed by a Certificate from IIT
            Bombay in PHP and MySQL, I am committed to staying updated with the
            latest advancements in AI, Machine Learning, and backend
            development. Join me as I embark on a journey of continuous growth
            and innovation, aiming to make a positive impact through technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
