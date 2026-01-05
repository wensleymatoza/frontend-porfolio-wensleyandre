import '@/styles.css'
import './HomePage.css'
import Marquee from 'react-fast-marquee'

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
    <div className='flex bg-[#313638] flex-col z-0 '>
      {/* First Section  */}
    <div className = 'hero'>
      <section className = 'hero-content'>
        <h1 className = 'text-8xl font-bold  text-[#EDEDED]'> Welcome </h1>
        <h2 className = 'whitespace-pre-wrap text-[#EDEDED] ml-10'>
          Hi, I'm Wensley Andre Matoza,<br/>
          I'm a front-end developer based in Leyte, Philippines.<br/>
          I build UI systems, SaaS pages, and API-driven apps with strong UX.
        </h2>
        <a href = '#projects' className= 'hero-button hover:scale-110 ml-10'> See Profile</a>
      </section>
    </div>

    <section className = 'skills-carousel mb-5'>
      <Marquee 
        speed={100}
        direction="left">
        {skills.map((skill, i) => (
          <span 
            key = {i}
            className="text-2xl font-semibold whitespace-nowrap mr-16">
            {skill}
          </span>
        ))}
      </Marquee>
    </section>
    {/* Third Section  */}
    <section id= 'projects' className = 'flex min-h-screen z-0 justify-center '>
      <div className = 'projects-section'>
        <h1 className='text-3xl'>Projects</h1>
        <div className='flex [&>*]:'>
          <div className='flex border-2 p-2 m-2 size-50'>Project 1</div>
          <div className='flex border-2 p-2 m-2 size-50'>Project 2</div>
        </div>
      </div>
    </section>


    {/* Second Section  */}
    </div>
    </>

  )
}

export default HomePage
