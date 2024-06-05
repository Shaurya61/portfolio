"use client";
import React from "react";
import Profile from "./profile";
import Education from "./education";
import Skills from "./skills";
import Contact from "./contact";

function Component() {
  return (
    <div className=" mt-12 ml-8 mr-8 ">
      <div className="mb-12 bg-slate-800 border-sky-200  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_5px_#08f,0_0_10px_#08f] rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
        <Profile />
      </div>
      <div className="mb-12 bg-slate-800 border-sky-200  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_5px_#08f,0_0_10px_#08f] rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
        <Education />
      </div>
      <div className="mb-12 bg-zinc-900 border-sky-200  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_5px_#08f,0_0_10px_#08f] rounded-lg  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
        <Skills />
      </div>
      <div className="mb-12 bg-zinc-900 border-sky-200  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_5px_#08f,0_0_10px_#08f] rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 ">
        <Contact />
      </div>
      
    </div>
  );
}

export default Component;
