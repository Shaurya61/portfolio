'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/send-email';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <motion.form 
      onSubmit={handleSubmit(onSubmit)} 
      className='w-full flex flex-col justify-center items-center text-white' 
      id='contact'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className='text-white text-4xl font-extrabold mb-16 mt-16 drop-shadow-[0_0_5px_#00f]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Contact Form
      </motion.h1>
      <motion.div 
        className=' m-4 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_5px_#08f,0_0_10px_#08f] pt-4 p-4 md:p-16 mb-8 md:bg-gray-900 bg-opacity-80 rounded-lg'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mb-5'>
          <label htmlFor='name' className='mb-3 block text-base font-medium text-white'>
            <span className='text-base drop-shadow-[0_0_5px_#00f]'>Full Name</span>
          </label>
          <motion.input
            type='text'
            placeholder='Full Name'
            className='text-white w-full rounded-md border border-gray-700 bg-gray-800 py-3 px-6 text-base font-medium outline-none focus:border-blue-500 focus:shadow-md focus:bg-gray-900'
            {...register('name', { required: true })}
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='mb-3 block text-base font-medium text-white'>
            <span className='drop-shadow-[0_0_5px_#00f]'>Email Address</span>
          </label>
          <motion.input
            type='email'
            placeholder='example@domain.com'
            className='text-white w-full rounded-md border border-gray-700 bg-gray-800 py-3 px-6 text-base font-medium outline-none focus:border-blue-500 focus:shadow-md focus:bg-gray-900'
            {...register('email', { required: true })}
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='message' className='mb-3 block text-base font-medium text-white'>
            <span className='drop-shadow-[0_0_5px_#00f]'>Message</span>
          </label>
          <motion.textarea
            rows={4}
            placeholder='Type your message'
            className='text-white w-full resize-none rounded-md border border-gray-700 bg-gray-800 py-3 px-6 text-base font-medium outline-none focus:border-blue-500 focus:shadow-md focus:bg-gray-900'
            {...register('message', { required: true })}
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>
        </div>
        <div className='flex justify-center'>
          <motion.div
            whileHover={{ scale: 1.1 }}
          >
            <Button
              className='bg-black   shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_10px_#08f] w-40 h-12 rounded-full mt-10'
              
            >
              Contact me
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.form>
  );
};

export default Contact;
