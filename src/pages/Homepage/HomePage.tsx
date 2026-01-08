import * as React from 'react'
import '@/styles.css'
import './HomePage.css'
import Marquee from 'react-fast-marquee'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const skills = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'REACT',
  'TYPESCRIPT',
  'TANSTACK START',
  'NEXT JS',
]

type TimelineItem = {
  title: string
  year: string
  description: string
}

const timeline: TimelineItem[] = [
  {
    title: 'Started Frontend',
    year: '2024',
    description: 'Learned HTML, CSS, and JavaScript. Built my first static websites.',
  },
  {
    title: 'React & Routing',
    year: '2025',
    description: 'Built SPAs using React, component patterns, and routing.',
  },
  {
    title: 'Advanced State & Deployment',
    year: '2026',
    description: 'Used React Query, TanStack Router, and deployed real projects.',
  },
]

function TimelineCard({ item }: { item: TimelineItem }) {
  const ref = React.useRef<HTMLDivElement | null>(null)

  // ✅ IMPORTANT: once: false so it toggles when scrolling up/down
  const inView = useInView(ref, {
    margin: '0px 0px -20% 0px',
    amount: 0.3,
    once: false,
  })

  return (
    <div className="relative pl-10">
      {/* Dot (static) */}
      <span className="absolute left-[3px] top-2 h-3 w-3 rounded-full bg-[#EDEDED]" />

      {/* Date (static, always visible) */}
      <span className="absolute left-[-64px] top-0 text-sm text-white/60">
        {item.year}
      </span>

      {/* Card (animate IN when in view, OUT when not in view) */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
      >
        <h3 className="text-lg font-semibold text-[#EDEDED]">{item.title}</h3>
        <p className="mt-2 text-[#EDEDED]/70">{item.description}</p>
      </motion.div>
    </div>
  )
}

function VerticalTimeline() {
  const sectionRef = React.useRef<HTMLElement | null>(null)

  // Track scroll progress INSIDE this section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // tweak these offsets if you want the highlight to start earlier/later
    offset: ['start 0.9', 'end 0.2'],
  })

  // Convert progress (0..1) to a line fill height
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={sectionRef} className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="mb-12 text-3xl font-bold text-[#EDEDED]">My Journey</h2>

      <div className="relative">
        {/* Base line (always visible) */}
        <div className="absolute left-2 top-0 h-full w-[2px] bg-white/20" />

        {/* ✅ Highlight progress line */}
        <motion.div
          style={{ height: fillHeight }}
          className="absolute left-2 top-0 w-[2px] bg-[#EDEDED]"
        />

        {/* Give space on the left so the date doesn't get clipped */}
        <div className="space-y-12 pl-16">
          {timeline.map((item, index) => (
            <TimelineCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

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
        <section id="projects" className="flex min-h-[50vh] w-full z-0 justify-center items-center border-4 bg-white">

      <Carousel className='border-2'>
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
