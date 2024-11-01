import React from 'react'
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="pb-40">
      <div id="contact" className="flex min-h-[70vh] w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6 space-y-8 p-14">
          <h1 className="text-center text-5xl md:text-7xl">
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Contact</span>
          </h1>
          <p className="text-center md:text-base text-pretty text-sm text-gray-300 flex max-w-[600px]">
            For inquiries regarding potential collaborations, hiring, or any other professional matters, please feel free to reach out. I am always open to discussing new opportunities and will make every effort to respond promptly.
          </p>
          <div className='flex flex-wrap justify-center gap-4 mt-5'>
            <a
              href="mailto:lucascruztrabalho@gmail.com"
              className='flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 transition-all duration-300 text-sm sm:text-base hover:scale-105'
            >
              <MdEmail className='mr-2' />
              Send an e-mail
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5513998048091&text=Hello,%20I%20am%20reaching%20out%20regarding%20your%20resume.%20Could%20we%20discuss%20this%20further?"
              className='flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 transition-all duration-300 text-sm sm:text-base hover:scale-105'
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp className='mr-2' />
              Send a message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact