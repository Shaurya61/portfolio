'use client';

import React from "react";
import { motion } from 'framer-motion';

const educationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

function Education() {
  return (
    <div id="education" className="">
      <motion.span 
        className="text-6xl drop-shadow-[0_0_5px_#00f] flex flex-col justify-center items-center text-white font-extrabold mb-24"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={educationVariants}
      >
        <p className="mt-16 text-4xl">My Journey</p>
      </motion.span>
      <div className="ml-4 mt-10 sm:ml-5 sm:mt-16 xl:ml-14 text-white pr-8">
        <ol className="relative border-l-2 bottom-14 border-blue-400">
          {[
            {
              id: 'basyo',
              time: 'April 2024 – Present',
              title: 'Freelance Web Developer',
              subtitle: 'Basyo',
              subtitleLink: 'https://basyo.net',
              description: 'BASYO is a platform that supports people to create energy that suits their lifestyle, regardless of place or time. BASYO is an unprecedented, wellness-focused platform that allows anyone to easily and enjoyably aim for a healthy mind and body, and supports the creation of value for individuals and places with ease.',
              tasks: [
                'Built a Minimum Viable Product (MVP) using Bubble, a no-code platform, under tight deadlines.',
                'Led the entire product lifecycle from initial concept to deployment, making key design and functionality decisions.',
                'Managed client communications, gathering requirements, and providing regular updates to ensure project alignment with client expectations.',
                'Website: basyo.online'
              ],
              websiteLink: 'basyo.online'
            },
            {
              id: 'nullclass',
              time: 'June 2023 - July 2023',
              title: 'Full Stack Developer',
              subtitle: 'NullCLASS',
              subtitleLink: 'https://nullclass.com',
              description: 'Nullclass is an Ed-Tech Platform to get hands on practice with real world project based in Tamil Nadu.',
              tasks: [
                'Cloned the functionality of Stackoverflow, using mern stack.',
                'Integrated Chatbot to answer user queries',
                'Implemented a subscription-based payment system with Stripe.',
                'Learned about MERN stack, OPEN AI API, development and Hosting and Industry best practices',
                'Website: stackover-flow-clone.vercel.app'
              ],
              websiteLink: 'stackover-flow-clone.vercel.app'
            },
            {
              id: 'netaji-subhas-university',
              time: 'December 2020 - May 2024',
              title: 'Electronics and Communication Engineering',
              subtitle: 'Netaji Subhas University of Technology'
            }
          ].map((item, index) => (
            <motion.li
              key={item.id}
              id={item.id}
              className="mb-10 ml-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={educationVariants}
            >
              <div className="absolute -left-[7px] mt-1.5 h-3 w-3 bg-white rounded-full border shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_5px_#08f,0_0_10px_#08f]"></div>
              <time className="text-glow mb-1 text-sm font-normal leading-none">
                {item.time}
              </time>
              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>
              {item.subtitleLink ? (
                <h4 className="text-lg text-slate-200">
                  <a
                    href={item.subtitleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {`@ ${item.subtitle}`}
                  </a>
                </h4>
              ) : (
                <h4 className="text-lg text-slate-200">
                  {item.subtitle}
                </h4>
              )}
              {item.description && (
                <p className="my-4 text-justify text-base text-slate-400">
                  {item.description}
                </p>
              )}
              {item.tasks && (
                <ul className="ml-6 text-slate-400">
                  {item.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="my-2 list-disc">
                      {task.includes('Website:') ? (
                        <>
                          {'Website: '}
                          <a
                            href={`http://${task.split(' ')[1]}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                          >
                            {task.split(' ')[1]}
                          </a>
                        </>
                      ) : (
                        task
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Education;
