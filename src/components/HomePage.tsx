import { Link } from "@tanstack/react-router"
import "../styles.css"


const HomePage = () => {
  return (
    <>
    <div className="flex flex-col  ">
    <div className="flex min-h-screen min-w-screen border-2 justify-center items-center bg-pattern1 ">
      <div className = 'flex border-2 size-125 p-2 m-2 justify-center items-center flex-col '>
        <span><h2>I am Frontend Webdeveloper</h2></span>
        <a href= '#portfolio' className="flex border-2 p-2 m-2 rounded-2xl hover:scale-105 bg-blue-300">See Portfolio</a>
      </div>
      <div className="flex border-2 size-125 p-2 m-2">
                  {/* first section */}
      </div>
    </div>
    <div className="min-h-screen border-2 ">
    
    </div>

    <div id = 'portfolio'className="min-h-screen border-2 ">
      {/* second section */}
      <h1>this is the 2nd section</h1>
    </div>
    </div>
    </>
  )
}

export default HomePage
