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
      <nav className="sticky z-50">
        <div className="flex border-2 p-2 justify-between mx-5 rounded-b-2xl">
          <div>
            <span className="text-cyan-300">Wensley Andre's </span> 
            <span className="text-purple-300">Portfolio</span>
          </div>

          <div className="flex gap-x-3 sticky">
            {navItems.map((item) => (
              <Link 
              key={item.name} 
              to={item.href} 
              className="hover:scale-105 ease-in-out transition-transform duration-200">
                <h2>
                    {item.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;