import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-900 flex justify-center items-center text-white from-black via-gray-800 to-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 ">
      <div className="text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <a href="https://github.com/Shaurya61" className="text-teal-500 hover:text-teal-400">
            <i className="fab fa-github text-2xl drop-shadow-[0_0_5px_#00f]">Github</i>
          </a>
          <a href="https://linkedin.com/in/shaurya8555" className="text-teal-500 hover:text-teal-400">
            <i className="fab fa-linkedin text-2xl drop-shadow-[0_0_5px_#00f]">Linkedin</i>
          </a>
          <a href="https://x.com/Shaurya35804973" className="text-teal-500 hover:text-teal-400">
            <i className="fab fa-twitter text-2xl drop-shadow-[0_0_5px_#00f]"> Twitter</i>
          </a>
        </div>
        <p className="text-sm text-gray-400 drop-shadow-[0_0_5px_#00f]">&copy; 2024 Shaurya Nayyar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
