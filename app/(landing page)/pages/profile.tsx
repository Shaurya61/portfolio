// components/Profile.tsx
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Profile = () => {
  const profileVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <div
      className="flex flex-col-reverse md:flex-col-reverse xl:flex-row h-screen justify-center items-center rounded-lg p-4 md:p-4 "
      id="home"
    >
      <div className="m-4 md:m-4 p-4 md:p-8 flex flex-col text-white items-center md:items-center">
        <motion.span
          className="text-4xl md:text-7xl font-bold"
          // initial={{ opacity: 0, y: -50 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1 }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={profileVariants}
        >
          Hi, I&apos;m Shaurya
        </motion.span>
        <motion.span
          className="text-xl md:text-3xl mt-2 font-bold animate-typing overflow-hidden whitespace-nowrap pr-6 text-teal-400 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Bringing Ideas to Life with Code
        </motion.span>
        <span className="text-sm md:text-base mt-4 md:mt-6 p-4 font-medium text-slate-400 text-center md:text-left">
          Transforming visions into reality with Next.js and the MERN stack.
        </span>
        <div className="flex flex-row space-x-4 md:space-x-8 mt-6 md:mt-8">
          <a
            href="https://www.linkedin.com/in/shaurya8555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.png"
              width={60}
              height={40}
              alt="LinkedIn"
              className="cursor-pointer rounded-full shadow-[0_0_2px_#000,inset_0_0_2px_#000,0_0_10px_#000,0_0_5px_#000] hover:shadow-[0_0_100px_#fff,inset_0_0_2px_#fff,0_0_20px_#00f,0_0_15px_#00f,0_0_10px_#00f]"
            />
          </a>
          <a
            href="https://github.com/Shaurya61"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.png"
              width={60}
              height={40}
              alt="GitHub"
              className="cursor-pointer rounded-full shadow-[0_0_5px_#000,inset_0_0_2px_#000,0_0_10px_#000,0_0_5px_#000] hover:shadow-[0_0_100px_#fff,inset_0_0_2px_#fff,0_0_20px_#00f,0_0_15px_#00f,0_0_10px_#00f]"
            />
          </a>
          <a
            href="https://x.com/Shaurya35804973"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/twitter-icon.webp"
              width={60}
              height={40}
              alt="Twitter"
              className="cursor-pointer rounded-full shadow-[0_0_2px_#000,inset_0_0_2px_#000,0_0_10px_#000,0_0_5px_#000] hover:shadow-[0_0_100px_#fff,inset_0_0_2px_#fff,0_0_20px_#00f,0_0_15px_#00f,0_0_10px_#00f]"
            />
          </a>
        </div>
        <a href="mailto:shauryanayyar.dev@gmail.com">
          <Button className="border-none shadow-[0_0_2px_#000,inset_0_0_2px_#000,0_0_10px_#000,0_0_5px_#000] w-32 md:w-40 h-10 md:h-12 rounded-full mt-8 md:mt-10 bg-black hover:bg-slate-900 hover:shadow-[0_0_100px_#fff,inset_0_0_2px_#fff,0_0_20px_#00f,0_0_15px_#00f,0_0_10px_#00f] hover:text-white">
            Contact me
          </Button>
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-8 md:mt-0"
      >
        <Image
          src="/profile3.png"
          width={350}
          height={200}
          alt="profile"
          className="rounded-full shad[0_0_10px_rgba(0,159,255,0.6),0_0_20px_rgba(0,159,255,0.4)] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,159,255,0.8),0_0_25px_rgba(0,159,255,0.6)] transition ease-in-out delay-150 hover:-translate-y-1"
        />
      </motion.div>
    </div>
  );
};

export default Profile;
