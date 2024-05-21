import React from "react";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10 text-white" id="contact">
      <div className="absolute inset-0">
        {/*eslint-disable-next-line */}
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative flex flex-col items-center z-10">
        <h1 className="text-center text-4xl lg:text-6xl font-bold lg:max-w-[45vw]">
          Ready to take <span className="text-purple-500">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-gray-300 md:mt-10 mt-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:afghanbahram8@gmail.com">
          <div className="pt-4">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </a>
      </div>
      <div className="relative flex mt-16 md:flex-row flex-col justify-between items-center z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2024 Elhamullah
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-gray-800 rounded-lg border border-gray-700"
            >
              {/*eslint-disable-next-line */}
              <img
                src={profile.img}
                alt={profile.id.toString()}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
