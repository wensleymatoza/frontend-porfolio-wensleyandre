import React from 'react'
import '@/styles.css'
import { motion } from 'framer-motion'
import './HomePage.css'

const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "TYPESCRIPT",
  "TANSTACK START",
  "NEXT JS",
]

const HomePage = () => {
  return (
    <> 
    <div className='flex bg-pattern1 flex-col z-0 '>
      {/* First Section  */}
    <div className = 'hero'>
      <section className = 'hero-content'>
        <h1 className = 'text-4xl font-bold text-center'> Welcome to My Portfolio </h1>
        <a href = '#projects' className= 'hero-button hover:scale-110'> See Profile</a>
      </section>
    </div>

    {/* Second Section  */}
    <section className = 'flex min-h-[10vh] w-full z-0 overflow-hidden'>
      <motion.div 
      className='flex z-10 w-max gap-30 bg-transparent items-center will-change-transform'
      animate = {{x: ["0%", "-50%"]}}
      transition={{ ease: "linear", duration: 60, repeat: Infinity }}>
        {[...skills, ...skills].map((skill, i) => (
          <h2 
            key = {i}
            className="text-2xl font-semibold px-6 py-4 whitespace-nowrap">
            {skill}
          </h2>
        ))}
      </motion.div>
    </section>

    {/* Third Section  */}
    <section id= 'projects' className = 'flex border-4 min-h-screen z-0 justify-center '>
      <div className = ' flex border-2 p-2 m-2 size-100 rounded-2xl bg-green-100 justify-center flex-col items-center gap-10'>
        <h1 className='text-3xl'>Projects</h1>
      </div>
    </section>

    </div>
    </>

  )
}

export default HomePage
