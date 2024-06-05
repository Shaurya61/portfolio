import React from 'react';
import SkillsComponent from '../components/Skills';

import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className='flex flex-col' id='skills'>
      <motion.span
        className='text-white text-4xl font-extrabold text-center mt-16 drop-shadow-[0_0_5px_#00f]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Tools & Technologies
      </motion.span>
      <div className='flex flex-wrap text-white justify-evenly mb-16'>
        <SkillsComponent name="Next.js" image='/next-js.svg' />
        <SkillsComponent name="MongoDB" image='/mongodb.png' />
        <SkillsComponent name="React" image='/react.png' />
        <SkillsComponent name="Tailwind" image='/tailwind.png' />
        <SkillsComponent name="TypeScript" image='/typescript.svg' />
        <SkillsComponent name="Node.js" image='/node.png' />
        <SkillsComponent name="Express" image='/express.png' />
        <SkillsComponent name="GraphQL" image='/graphql.png' />
        <SkillsComponent name="HTML" image='/html5.svg' />
        <SkillsComponent name="CSS" image='/css.png' />
        <SkillsComponent name="JavaScript" image='/javascript.png' />
        <SkillsComponent name="Github" image='/github.png' />
      </div>
    </div>
  );
};

export default Skills;