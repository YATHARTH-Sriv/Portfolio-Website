"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";



export function About() {
  return (
    <div id="about-me">
    <CardContainer  className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          About-Me
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          I am a Full Stack Developer deep diving into web development, currently working with Nextjs,Reactjs,ExpressJs,MongoDB,Tailwind,Shadcn UI and blockchain. Building new stuff for the world always exictes me.Looking forward for opportunities so let's grab a coffee and have a meet 
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://avatars.githubusercontent.com/u/126802444?v=4"
            height="500"
            width="500"
            className=" w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/yatharth_sriv"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <p className=" rounded-md text-white">Let's Connect</p>
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>

    </div>
  );
}
