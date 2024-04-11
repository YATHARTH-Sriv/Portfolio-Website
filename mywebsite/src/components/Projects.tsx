"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";

const content = [
  {
    title: "Blog-App with Appwrite",
    description:
      "A blog app with the functionality to login in [authentication] add post,edit or delete see other people posts using Appwrite as a service ",
      
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Link href={"https://yatharth-blogapp.vercel.app/" }>
            Blog-App
        </Link>
      </div>
    ),
  },
  {
    title: "A Redux Api Todo",
    description:
      "A redux toolkit based todo app which uses local storage of your browser leading to no loss of the previous data. Redux and Context Api can be confusing at times but this todo project helps to understand these complex concepts ",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Link href={"https://yatharth-todo.vercel.app/"}>
        Manage Your Todos
        </Link>
      </div>
    ),
  },
  
];
export function StickyScrollRevealDemo() {
  return (
    <div id="projects" className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
