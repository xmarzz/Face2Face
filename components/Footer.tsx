import { FaMapLocationDot } from "react-icons/fa6";

export default function footer() {
  return (
    <div className="bg-slate-500">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-black-500 mr-2 font">Location</h2>
        <div className="flex flex-row m-6">
          <a href="https://www.google.com/maps/place/Face+2+face/@10.8053632,76.4797839,20.06z/data=!4m15!1m8!3m7!1s0x3a528d076e31b243:0x486ee3f560e9c4a0!2sMannur,+Tamil+Nadu+602025!3b1!8m2!3d13.0216903!4d79.9573793!16s%2Fm%2F0521nfp!3m5!1s0x3ba877c7072ff791:0x5e093c6609d60e92!8m2!3d10.8056757!4d76.4798289!16s%2Fg%2F11q4gs5fj0?entry=ttu"
          target="_blank"
          className="underline">
              Locate Here
          </a>
          <div className="m-1"> <FaMapLocationDot/> </div> 
        </div>
      </div>
      <div>
        <h2>Contact Information</h2>
        <a href="https://wa.me/+919656465060?text=Hello,i%20need%20a%20appointment%20for%20a%20haircut" target="_blank">WhatsApp</a>
      </div>
    </div>
  );
}


