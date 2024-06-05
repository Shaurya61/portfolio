import Image from 'next/image';
import React from 'react';
import { easeIn, easeInOut, motion } from 'framer-motion';
import { easeOut } from 'framer-motion/dom';

const SkillsComponent = ({ name, image }: { name: string; image: string }) => {
  return (
    <motion.div
      className='flex flex-row items-center text-center w-60 h-28 mt-16 p-8 ml-4 mr-4 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#00f,0_0_5px_#00f] rounded-lg transition ease-linear'
      whileHover={{
        transition: easeOut,
        scale: 1.1,
        boxShadow: "0 0 30px #0ff, inset 0 0 2px #fff, 0 0 20px #00f, 0 0 15px #00f, 0 0 10px #00f"
      }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Image
        width={60}
        height={80}
        src={image}
        alt={name}
        className='rounded-full bg-white border-white  border-2'
      />
      <div className='ml-6 text-base font-medium'>{name}</div>
    </motion.div>
  );
};

export default SkillsComponent;
