
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-black ">
        <div className="flex flex-col items-start pt-10 pb-20 pl-5 text-white sm:pl-0 sm:items-center gap-y-8 sm:flex-row justify-evenly ">
          <div>
            <div className="mb-4 text-3xl font-semibold">Logo</div>
            <div className="mb-4 tracking-wide">
              More updates on future events
            </div>
            <div className="flex gap-2">
              <input
                className="w-[300px] h-10 pl-2 bg-black border-[1.5px] border-white rounded-lg focus:ring-0 focus:outline-none"
                type="text"
                placeholder="Enter your email id"
              />
              <button className="w-4/12 h-10 border-[1.5px] border-white rounded-full">
                Submit
              </button>
            </div>
          </div>
          <div>
            <div className="mb-4 text-base font-bold">Quick Links</div>
            <div className="flex cursor-pointer gap-x-2 sm:block">
              <div className="mb-3 text-sm">Home</div>
              <div className="mb-3 text-sm">About Us</div>
              <div className="mb-3 text-sm">Projects</div>
              <div className="mb-3 text-sm">Contact Us</div>
              <div className="mb-3 text-sm">FAQs</div>
            </div>
          </div>
          <div>
            <div className="mb-4 text-base font-bold">Follow Us</div>
            <div className="flex flex-wrap cursor-pointer gap-x-2 sm:block">
              <div className="flex items-center gap-2 mb-3 text-sm">
                <FaFacebook /> Facebook
              </div>
              <div className="flex items-center gap-2 mb-3 text-sm">
                <FaInstagram /> Instagram
              </div>
              <div className="flex items-center gap-2 mb-3 text-sm">
                <FaLinkedin /> LinkedIn
              </div>
              <div className="flex items-center gap-2 mb-3 text-sm">
                <FaYoutube /> Youtube
              </div>
              <div className="flex items-center gap-2 mb-3 text-sm">
                <FaXTwitter /> Twitter
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
