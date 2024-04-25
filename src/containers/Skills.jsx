import React from "react";
import { Leaf1, Leaf2 } from "../assets";
import { motion } from "framer-motion";
import { SkillCard } from "../components";

const Skills = () => {
  return (
    <section
      id="skills"
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
            Skills
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className=" text-texlight text-base tracking-wide text-justify ">
            <p className="text-transparent bg-clip-text  bg-gradient-to-r from-primary to-secondary">
              My Skills & Work Experience
            </p>
            <br />
            As a computer engineering student at Datta Meghe College of
            Engineering, my internship at Let's Grow More in web development
            provided invaluable experience. This opportunity allowed me to delve
            into frontend and backend development, honing skills in creating
            dynamic and user-centric websites. Additionally, my journey into
            Artificial Intelligence and Machine Learning, particularly in
            healthcare applications, has been rewarding. Through various
            projects, I've gained proficiency in Python, machine learning
            algorithms, and data analysis techniques, further augmenting my
            capabilities.
          </p>
          <p className="text-base text-texlight tracking-wide text-justify ">
            With a strong foundation in both frontend and backend development, I
            am equipped to deliver comprehensive and scalable solutions in web
            development projects. My passion for learning drives me to
            continuously enhance my skills, and I am eager to contribute to
            innovative projects that have a meaningful impact.
          </p>
        </div>
        <div className="w-full gap-4 flex flex-col items-center justify-center px-8">
          <SkillCard
            skill={"Front End Development"}
            percentage={"90%"}
            color={"#FF3F3F"}
            move={true}
          />
          <SkillCard
            skill={"Back End Development"}
            percentage={"65%"}
            color={"#008FFF"}
          />
          <SkillCard
            skill={"Machine Learning"}
            percentage={"75%"}
            color={"#9EDF0C"}
            move={true}
          />
          <SkillCard skill={"React JS"} percentage={"50%"} color={"#DF0CD2"} />
          <SkillCard
            skill={"Figma"}
            percentage={"75%"}
            color={"#E4FA01"}
            move={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
