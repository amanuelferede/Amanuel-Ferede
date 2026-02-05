import {
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

export default function ContactMe() {
  return (
    <div className="max-w-6xl mx-auto py-5" id="contact">
      <div className="grid grid-cols-12 md:gap-10">
        <div className="md:col-span-6 col-span-12 md:px-0 px-3">
          <div className="flex flex-col  space-y-6">
            <input
              className="w-full p-4 focus:outline-none rounded-sm border border-gray-300 focus:border-2 focus:border-gray-300"
              placeholder="Enter your name"
            ></input>
            <input
              className="w-full p-4 focus:outline-none rounded-sm border border-gray-300 focus:border-2 focus:border-gray-300"
              placeholder="Enter your email"
            ></input>

            <textarea
              rows={4}
              className="w-full p-4 focus:outline-none rounded-sm border border-gray-300 focus:border-2 focus:border-gray-300"
              placeholder="Enter your name"
            />
            <button className="md:ml-0 ml-4 md:w-4/12 w-1/2 py-2 px-3 text-center rounded-lg bg-blue-600 text-white">
              Send Message
            </button>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12 md:px-0 px-3 flex items-start md:justify-center">
          <div className="flex flex-col">
            <p className="text-zinc-500 my-2">Get me on</p>

            <div className="flex md:space-x-5 space-x-3">
              <FaFacebook className="md:w-9 md:h-9 w-7 h-7 md:hover:text-pink-500 transition-all duration-400 ease-in-out cursor-pointer" />
              <FiInstagram className="md:w-9 md:h-9 w-7 h-7 md:hover:text-pink-500 transition-all duration-400 ease-in-out cursor-pointer" />
              <FaLinkedin className="md:w-9 md:h-9 w-7 h-7 md:hover:text-pink-500 transition-all duration-400 ease-in-out cursor-pointer" />
              <FaXTwitter className="md:w-9 md:h-9 w-7 h-7 md:hover:text-pink-500 transition-all duration-400 ease-in-out cursor-pointer" />
              <FaTelegram className="md:w-9 md:h-9 w-7 h-7 md:hover:text-pink-500 transition-all duration-400 ease-in-out cursor-pointer" />
              <FaWhatsapp className="md:w-9 md:h-9 w-7 h-7 md:hover:text-pink-500 transition-all duration-400 ease-in-out cursor-pointer" />
              <FaTiktok className="md:w-9 md:h-9 w-7 h-7 md:hover:text-pink-500 transition-all duration-400 ease-in-out cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
