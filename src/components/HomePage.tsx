import { Link } from "@tanstack/react-router";
import "../styles.css";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      {/* parent div */}
      <div className="flex flex-col ">
        {/* First section */}
        <div
          className="flex min-h-screen w-screen  justify-center items-center bg-pattern1"
        >
          <motion.div className="flex  size-100 p-2 m-2 justify-center items-center flex-col rounded-2xl bg-blue-200 rotate-[-35deg] shrink-0">
            <span>
              <h2>I am Frontend Webdeveloper</h2>
            </span>
            <a
              href="#portfolio"
              className="flex p-2 m-2 rounded-2xl hover:scale-105 bg-blue-300 bg-orange-200 "
            >
              See Portfolio
            </a>
          </motion.div>

          <div className="flex  size-125 p-2 m-2 rounded-2xl bg-orange-50 justify-center items-center ml-50 shrink-0">
            <span>
              <h1>Hello this is the first section</h1>
            </span>
          </div>
        </div>
          {/* Second Section */}
        <div id="portfolio" className="min-h-[25vh]  bg-pattern1">
          {/* second section */}
          <h1>this is the 2nd section</h1>
        </div>

        <div id="portfolio" className="min-h-screen bg-pattern1">
          {/* second section */}
          <h1>Working on second section</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
