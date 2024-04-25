import React from "react";
import {
  About,
  Contact,
  Header,
  Home,
  ParticlesContainer,
  Projects,
  ServiceCount,
  Skills,
} from "./";
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";
const App = () => {
  return (
    <div className="w-full xl:w-[1500px] py-32 px-4 lg:px-12 pr-4 lg:pr-32 scrollbar-hide ">
      {/* particles container */}
      <ParticlesContainer className="scrollbar-hide"/>

      {/* header */}
      <Header className="scrollbar-hide" />

      {/* home container*/}
      <Home className="scrollbar-hide"/>

      {/* services count cards*/}
      <ServiceCount className="scrollbar-hide" />

      {/* about container */}
      <About className="scrollbar-hide"/>

      {/* skill container */}
      <Skills className="scrollbar-hide"/>

      {/* projects container */}
      <Projects className="scrollbar-hide"/>

      {/* contact container */}
      <Contact className="scrollbar-hide"/>

      {/* footer container */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12 scrollbar-hide">
        <p className="text-3xl tracking-wide text-texlight">Nachiket Phalak</p>
        <div
          className="flex items-center justify-center gap-16
           mt-16"
        >
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>

        <div className="w-full grid grid-col-1 lg:grid-cols-3 mt-12">
          <p className=" text-texlight text-center ">
            
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className=" text-texlight text-center ">
            cm.b.29nachiket.phalak@gmail.com
            </p>
            <p className=" text-texlight text-center ">+91 9764809954</p>
            <a
            href="https://drive.google.com/file/d/1O9RqnJaRPQAbss_5LvEO_kCqGM3GN33X/view"
            target="_blank"
            >
            <p className="  text-texlight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary ">Hire Me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
