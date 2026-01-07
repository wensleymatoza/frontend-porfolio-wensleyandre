import { Link } from "@tanstack/react-router"
import ContactDropdown from "./ContactDropdown"

export type navItem = {
  name: string
  href: string
}

const navItems: navItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Projects", href: "/Projects" },
]

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#313638] border-b-2 h-24 flex justify-between px-5">

      {/* LEFT BRAND */}
      <div className="flex shrink-0 w-fit">
        <div className="flex items-center mr-2 px-4">
          <span className="font-bold text-[24px] text-white px-4 py-1 border-2 rounded-2xl">
            W
          </span>

          <div className="flex flex-col px-4">
            <span className="text-cyan-300 text-[16px]">
              Wensley Andre
            </span>
            <span className="text-purple-300 text-[16px]">
              Front-end Developer
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT NAV */}
      <div className="flex gap-x-5 items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="hover:scale-105 transition-transform duration-200"
          >
            <span className="text-[24px] text-[#FAFAFA]">
              {item.name}
            </span>
          </Link>
        ))}

        {/* RADIX CONTACT DROPDOWN */}
        <ContactDropdown />
      </div>
    </nav>
  )
}

export default Navbar
