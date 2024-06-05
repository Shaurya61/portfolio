// components/NavbarComponent.tsx
'use client';

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link } from "react-scroll";
import Modal from "../components/Modal";
import { motion, AnimatePresence } from "framer-motion";

const NavbarComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div >
      <div className="flex p-5 justify-between bg-gray-900 text-xl top-0 z-10 bg-clip-padding backdrop-filter backdrop-blur-sm shadow-md bg-opacity-20">
        <span className="ml-4 md:ml-16 text-xl font-bold text-white">
          <span>Shaurya </span>
          <span className="text-[#1E90FF] drop-shadow-[0px_0px_8px_rgba(30,144,255,0.5)]">
            Nayyar
          </span>
        </span>
        <div className="hidden md:flex text-white items-center space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="font-bold cursor-pointer text-base hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="font-bold cursor-pointer text-base hover:text-gray-400 transition duration-300"
          >
            Education
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="font-bold cursor-pointer text-base hover:text-gray-400 transition duration-300"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="font-bold cursor-pointer text-base hover:text-gray-400 transition duration-300"
          >
            Contact
          </Link>
        </div>
        <Button
          variant="outline"
          className="hidden md:block text-base rounded-full border border-blue-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#1E90FF,0_0_5px_#1E90FF] hover:bg-gray-800 hover:shadow-[0_0_100px_#1E90FF,inset_0_0_2px_#1E90FF,0_0_20px_#1E90FF,0_0_15px_#1E90FF,0_0_10px_#1E90FF] hover:text-white"
          onClick={() => setShowModal(true)}
        >
          Resume
        </Button>
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-800 z-20"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 w-64 bg-gray-900 z-30 p-5 flex flex-col space-y-4"
            >
              <button
                className="self-end text-white"
                onClick={() => setIsSidebarOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="font-bold cursor-pointer text-base text-white hover:text-gray-400 transition duration-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                Home
              </Link>
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="font-bold cursor-pointer text-base text-white hover:text-gray-400 transition duration-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                Education
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="font-bold cursor-pointer text-base text-white hover:text-gray-400 transition duration-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="font-bold cursor-pointer text-base text-white hover:text-gray-400 transition duration-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact
              </Link>
              <Button
                variant="outline"
                className="text-base rounded-full border border-blue-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#1E90FF,0_0_5px_#1E90FF] hover:bg-gray-800 hover:shadow-[0_0_100px_#1E90FF,inset_0_0_2px_#1E90FF,0_0_20px_#1E90FF,0_0_15px_#1E90FF,0_0_10px_#1E90FF] hover:text-white"
                onClick={() => {
                  setShowModal(true);
                  setIsSidebarOpen(false);
                }}
              >
                Resume
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default NavbarComponent;
