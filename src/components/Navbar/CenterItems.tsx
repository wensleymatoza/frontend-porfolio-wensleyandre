import { Link } from "@tanstack/react-router";

export type navItem = {
  name: string;
  href: string;
};

const navItems: navItem[] = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/About" },
  { name: "Projects", href: "/Projects" },
];

function CenterItems() {
  return (
        <div className="flex gap-x-5 items-center text-[24px] text-[#FAFAFA]">
            {navItems.map((item) => (
                <Link
                key={item.name}
                to={item.href}
                className="hover:scale-105 transition-transform duration-200"
                >
            <span>{item.name}</span>
          </Link>
        ))}

      </div>
  )
}

export default CenterItems

