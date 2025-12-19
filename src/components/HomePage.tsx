import { Link } from "@tanstack/react-router"

const HomePage = () => {
  return (
    <>
    <div className="flex min-h-screen border-2 justify-center items-center ">
      <div className = 'flex border-2 size-[500px] p-2 m-2 justify-center items-center flex-col '>
        <span><h2>I am Frontend Webdeveloper</h2></span>
        <a href= '#portfolio'>See Portfolio</a>
      </div>
      <div className="flex border-2 size-[500px] p-2 m-2">
          hello world
      </div>
    </div>
    <div className="min-h-screen border-2 ">
    
    </div>

    <div id = 'portfolio'className="min-h-screen border-2 ">
        hello world
    </div>
    </>
  )
}

export default HomePage
