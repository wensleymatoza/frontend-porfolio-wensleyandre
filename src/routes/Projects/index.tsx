import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <>
    <div>
      <section className="relative w-full max-w-6xl px-6">
        <div className="relative bg-[#1E1F21] rounded-2xl p-10 border border-[#F4A261]/40 shadow-[0_0_60px_#F4A26133]">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* SIDEBAR */}
            <aside className="col-span-2 text-[#A9AAAC] space-y-6">
              <h3 className="text-[#E8E9EB] font-semibold tracking-wide">
                Smith
              </h3>
              <nav className="space-y-3 text-sm">
                <p className="hover:text-[#F4A261] cursor-pointer transition">Home</p>
                <p className="hover:text-[#F4A261] cursor-pointer transition">About</p>
                <p className="hover:text-[#F4A261] cursor-pointer transition">Work</p>
                <p className="hover:text-[#F4A261] cursor-pointer transition">Contact</p>
              </nav>
            </aside>

            {/* MAIN CONTENT */}
            <div className="col-span-10 flex justify-between items-center">

              {/* TEXT */}
              <div className="space-y-4 max-w-xl">
                <p className="text-[#F4A261] uppercase tracking-widest text-xs">
                  Hello, I’m
                </p>

                <h1 className="text-[#E8E9EB] text-5xl font-bold leading-tight">
                  Randy Smith
                </h1>

                <p className="text-[#A9AAAC] text-lg">
                  I am a UX/UI Designer
                </p>

                <div className="flex gap-4 pt-4">
                  <button className="bg-[#F4A261] text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                    View Work
                  </button>

                  <button className="border border-[#A9AAAC] text-[#E8E9EB] px-6 py-3 rounded-xl hover:border-[#F4A261] transition">
                    Contact
                  </button>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=600"
                  alt="Profile"
                  className="w-64 h-64 object-cover rounded-xl grayscale"
                />
              </div>

            </div>
            <div>
              
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default ProjectsPage
