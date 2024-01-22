import { FaMapLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function footer() {
  return (
    <div className="bg-gray-400 py-10">
        <div className="flex flex-row mb-6">
          <div className="flex flex-col flex-grow ">
            <h2 className="mr-2 ml-6 mt-6 font text-white font-raleway leading-5 lg:text-xl">Location</h2>
            <div className="flex flex-row ml-6">
              <a
                href="https://www.google.com/maps/place/Face+2+face/@10.8053632,76.4797839,20.06z/data=!4m15!1m8!3m7!1s0x3a528d076e31b243:0x486ee3f560e9c4a0!2sMannur,+Tamil+Nadu+602025!3b1!8m2!3d13.0216903!4d79.9573793!16s%2Fm%2F0521nfp!3m5!1s0x3ba877c7072ff791:0x5e093c6609d60e92!8m2!3d10.8056757!4d76.4798289!16s%2Fg%2F11q4gs5fj0?entry=ttu"
                target="_blank"
                className="underline text-grey"
              >
                Locate Here
              </a>
              <div className="m-1.5">
                {" "}
                <FaMapLocationDot />{" "}
              </div>
            </div>
          </div>
          <div className="ml-6 mt-6 mr-4">
            <h2 className="text-s text-white font-raleway leading-5 lg:text-xl">Contact Information</h2>
            <div className="flex flex-row">
              <a
                href="https://wa.me/+919656465060?text=Hello,i%20need%20a%20appointment%20for%20a%20haircut"
                target="_blank"
                className="ml-6 text-s underline text-grey"
              >
                WhatsApp
              </a>
              <FaWhatsapp className="m-1.5" />
            </div>
          </div>
        </div>
        <div>
          <hr className="border-b border-solid border-gray-800"/>
        </div>
        <div className="text-center text-gray-600 text-sm m-2 mt-5">
          &copy; 2024 All rights reserved. | Made with ❤️ by WebCrafter
          Contact : <a href="mailto:marzelon@gmail.com" target="_blank">marzelon@gmail.com</a>
        </div>
    </div>
  );
}


