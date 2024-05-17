import React from "react";
import HeroPage from "@/components/Hero";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <HeroPage />
      </div>
    </main>
  );
};

export default Home;
