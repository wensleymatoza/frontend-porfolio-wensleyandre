import { Link } from "@tanstack/react-router";

export type navItem = {
  name: string;
  href: string;
};

const navItems: navItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Projects", href: "/Projects" },
  { name: "Contact", href: "/Contact" },
];

const Navbar = () => {
  return (
    <>
      <nav className="sticky bg-[#313638] border-b-2 h-24 flex justify-between px-5">
          <div className="flex shrink-0 w-fit ">
            <div className = 'flex items-center justify-center  mr-2 px-4 '>
              <span className = 'font-bold text-[24px] text-white border- px-4 py-1 border-2 rounded-2xl'>W</span>
              <div className="flex flex-col px-4">
                <span className="text-cyan-300 text-[16px] whitespace-pre-wrap">Wensley Andre</span> 
                <span className="text-purple-300 text-[16px]">Front-end Developer</span>
              </div>
            </div>
          </div>

          <div className="flex gap-x-3 sticky items-center justify-center">
            {navItems.map((item) => (
              <Link 
              key={item.name} 
              to={item.href} 
              className="hover:scale-105 ease-in-out transition-transform duration-200">
                <h1 className="text-[24px] text-[#FAFAFA]">
                    {item.name}
                </h1>
              </Link>
            ))}
          </div>
      </nav>
    </>
  );
};

export default Navbar;