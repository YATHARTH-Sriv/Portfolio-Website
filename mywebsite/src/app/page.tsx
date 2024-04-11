
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { StickyScrollRevealDemo } from "@/components/Projects";
import { Socials } from "@/components/Socials";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <StickyScrollRevealDemo/>
    <Socials/>
    </>
  );
}
