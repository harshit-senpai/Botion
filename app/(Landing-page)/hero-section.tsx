"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  PiArrowRight,
  PiBookOpenLight,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const tabs = [
  {
    icon: (
      <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-full" />
    ),
    name: "AI",
    feature: "New with Q&A",
    description: "Get answers to your questions",
    more: (
      <div className="text-purple-600 flex items-center">
        Learn More <PiArrowRight className="text-sm ml-2" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: (
      <PiBookOpenLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-full" />
    ),
    name: "Wikis",
    description: "Centralize all your knowledge",
    more: (
      <div className="text-red-600 flex items-center">
        Learn More <PiArrowRight className="text-sm ml-2" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },
  {
    icon: (
      <PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-full" />
    ),
    name: "Projects",
    description: "Manage your projects with ease",
    more: (
      <div className="text-blue-600 flex items-center">
        Learn More <PiArrowRight className="text-sm ml-2" />
      </div>
    ),
    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: (
      <PiTargetLight className="text-3xl mr-2 text-yellow-600 bg-purple-100 p-1 rounded-full" />
    ),
    name: "Docs",
    description: "Manage your docs with ease",
    more: (
      <div className="text-purple-600 flex items-center">
        Learn More <PiArrowRight className="text-sm ml-2" />
      </div>
    ),
    image: "/assets/FloatDoodle.svg",
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="md:items-center flex flex-col">
      <div className="font-semibold md:text-5xl lg:text-6xl xl:w-1/2 md:w-2/3 lg:px-0 px-8 text-5xl xl:text-6xl flex justify-center xl:pt-14 text-center pt-6">
        Write, plan, share.
        <br />
        With AI at your side.
      </div>
      <p className="text-2xl pt-4 font-medium text-center w-2/3 mx-auto">
        Botion is the connected workspace where better, faster work happens.
      </p>
      <div className="flex md:flex-row flex-col items-center justify-center gap-4 pt-6">
        <Link href="/">
          <Button className="py-1">
            <div className="flex items-center justify-center">
              <div className="text-lg font-medium">Get Botion free</div>
              <div>
                <PiArrowRight className="ml-2" />
              </div>
            </div>
          </Button>
        </Link>
        <Link href="/contact-us">
          <div className="flex items-center justify-center gap-1">
            <div className="text-lg text-blue-500">Request a demo</div>
            <div className="flex items-center justify-center gap-1">
              <PiArrowRight className="text-blue-500 flex items-center justify-center gap-1" />
            </div>
          </div>
        </Link>
      </div>

      <div className="pt-8 xl:pt-20 items-center justify-center">
        <Image
          src={"/assets/home-hero.png"}
          alt="hero"
          width={1000}
          height={1000}
          className="flex items-center justify-center mx-auto w-[18rem] xl:w-[39rem] lg:w-[43.5rem] md:w-[44rem]"
        />
      </div>
      {isSmallScreen ? (
        <div className="px-8">
          <div className="grid grid-cols-4 md:row-span-1 gap-4 xl:gap-6 mt-8 xl:px-0">
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className={`flex p-1 md:p-8 cursor-pointer ${
                  activeTab.name === tab.name
                    ? "rounded-md md:rounded-xl bg-[#f6f5f4] md:bg-white border-gray-200 md:border items-center justify-center flex p-1"
                    : "md:bg-[#f6f5f4] rounded-md xl:rounded-xl p-1 items-center justify-center flex hover:bg-[#eae7e7]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <div className="flex flex-col items-center md:justify-center mx-auto">
                  <div className="hidden md:flex text-4xl">{tab.icon}</div>
                  <div className="font-medium text-sm xl:text-lg mt-1">
                    {tab.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="pt-6 md:py-10 lg:px-16 xl:px-0 w-full">
            {activeTab && (
              <div className="flex justify-center items-center flex-col">
                <Image
                  src={activeTab.image}
                  alt="Hero"
                  width={1000}
                  height={1000}
                  className="w-full border p-20 xl:p-40 rounded-xl"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`xl:flex justify-center space-x-4 xl:pt-4 sm:py-10 xl:py-0 w-60 h-36 ${
                activeTab.name === tab.name
                  ? "border rounded-xl pt-2 bg-white"
                  : "shadow-md rounded-xl pt-2 bg-[#f6f5f4] "
              }`}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-medium">{tab.name}</div>
                  {tab.name === "AI" && (
                    <div className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full ml-2">
                      {tab.feature}
                    </div>
                  )}
                </div>
                <motion.div
                  className="flex flex-col text-sm"
                  initial={{ y: 0 }}
                  animate={{ y: activeTab === tab ? 10 : 25 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tab.description}
                    </motion.div>
                  </div>
                  {activeTab === tab && (
                    <div className="text-sm mt-2">{tab.more}</div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      <div className="hidden md:flex py-10 px-8 md:px-0 lg:w-3/4 2xl:w-[55%]">
        {activeTab && (
          <div className="md:flex items-center justify-center space-x-6 hover:cursor-pointer w-full">
            <Image
              src={activeTab.image}
              alt="Hero"
              width={500}
              height={500}
              className="w-full p-20 xl:p-40 shadow-md rounded-xl bg-[#f6f5f4]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
