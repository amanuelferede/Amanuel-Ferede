import Image from "next/image";
import {
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
export default function Footer() {
  return (
    <div className="w-full bg-blue-500 pt-10 pb-4 text-white">
      <div className="max-w-3xl mx-auto flex justify-center md:px-0 px-3">
        <div className="flex space-x-3">
          <Image
            src="/works/1.jpg"
            alt="xxx"
            width={0}
            height={0}
            sizes="100vh"
            className="w-15 h-15 rounded-full object-cover"
          />
          <div className="flex flex-col space-y-2">
            <p className="md:text-lg font-semibold">
              Site made using Next.js, Tailwind Css{" "}
            </p>
            <div className="flex md:space-x-5 space-x-3">
              <FaFacebook className="md:w-6 md:h-6 w-6 h-6" />
              <FiInstagram className="md:w-6 md:h-6 w-6 h-6" />
              <FaLinkedin className="md:w-6 md:h-6 w-6 h-6" />
              <FaXTwitter className="md:w-6 md:h-6 w-6 h-6" />
              <FaTelegram className="md:w-6 md:h-6 w-6 h-6" />
              <FaWhatsapp className="md:w-6 md:h-6 w-6 h-6" />
              <FaTiktok className="md:w-6 md:h-6 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <p className="font-semibold text-center text-white mt-2">
        Copy rights {new Date().getFullYear()}
      </p>
    </div>
  );
}
