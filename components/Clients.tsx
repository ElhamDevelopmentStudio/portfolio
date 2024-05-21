import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="text-6xl font-bold text-center text-white mb-12">
        Kind words from{" "}
        <span className="text-purple-500">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="text-4xl font-bold text-white mt-16 mb-10">
          Companies
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex items-center gap-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src={img}
                  alt={name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="relative w-32 h-8 md:w-40 md:h-10">
                <Image
                  src={nameImg}
                  alt={name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
