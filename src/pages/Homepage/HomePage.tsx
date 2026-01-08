
import '@/styles.css'
import './HomePage.css'
import Marquee from 'react-fast-marquee'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import VerticalTimeline from '@/components/VerticalTimeline/Timeline'

const skills = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'REACT',
  'TYPESCRIPT',
  'TANSTACK START',
  'NEXT JS',
]


const HomePage = () => {
  return (
    <>
      <div className="flex bg-[#313638] flex-col z-0">
        {/* HERO */}
        <div className="hero">
          <section className="hero-content">
            <h1 className="text-8xl font-bold text-[#EDEDED]">Welcome</h1>
            <h2 className="whitespace-pre-wrap text-[#EDEDED] ml-10">
              Hi, I&apos;m Wensley Andre Matoza,
              <br />
              I&apos;m a front-end developer based in Leyte, Philippines.
              <br />
              I build UI systems, SaaS pages, and API-driven apps with strong UX.
            </h2>
            <a href="#projects" className="hero-button hover:scale-110 ml-10">
              See Profile
            </a>
          </section>
        </div>

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

        {/* ✅ TIMELINE (toggle cards + highlight line) */}
        <VerticalTimeline />

        {/* PROJECTS */}
        <section id="projects" className="flex min-h-[100vh] w-full z-0 justify-center items-center ">
      {/* add carousel for projects7 */}

      <Carousel className='border-2 flex h-100 w-100 items-center justify-center pl-38 rounded-2xl border-black bg-blue-300'>
        <CarouselContent> 
          <CarouselItem >Project 1</CarouselItem>
          <CarouselItem>Project 2</CarouselItem>
          <CarouselItem>Project 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
        </section>

      </div>
    </>
  )
}

export default HomePage
