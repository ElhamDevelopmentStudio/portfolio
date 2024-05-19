import React from "react";
import HeroPage from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";

const navItems = [{ name: "Home", link: "/", icon: <FaHome /> }];

const Home = () => {
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col  mx-auto sm:px-10 px-5 overflow-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <HeroPage />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
};

export default Home;
