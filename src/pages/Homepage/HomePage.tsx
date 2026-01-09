import "@/styles.css";
import "./HomePage.css";
import Marquee from "react-fast-marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VerticalTimeline from "@/components/VerticalTimeline/Timeline";
import Hero from "./Hero";

const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "TYPESCRIPT",
  "TANSTACK START",
  "NEXT JS",
];

const HomePage = () => {
  return (
    <>
     <div className="flex bg-[#313638] flex-col z-0">
      <Hero />
        {/* SKILLS MARQUEE */}
        <section className="skills-carousel mb-5">
          <Marquee speed={100} direction="left">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="text-2xl font-semibold whitespace-nowrap mr-16 text-[#EDEDED]"
              >
                {skill}
              </span>
            ))}
          </Marquee>
        </section>
        <VerticalTimeline />
        {/* PROJECTS */}
        {/* add carousel for projects */}
        <section
          id="projects"
          className="flex min-h-svh w-full z-0 justify-center items-center "
        >
          <Carousel className="border-2 flex h-100 w-100 items-center justify-center pl-38 rounded-2xl border-black bg-blue-300">
            <CarouselContent>
              <CarouselItem>Project 1</CarouselItem>
              <CarouselItem>Project 2</CarouselItem>
              <CarouselItem>Project 3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
    </>
  );
};

export default HomePage;
