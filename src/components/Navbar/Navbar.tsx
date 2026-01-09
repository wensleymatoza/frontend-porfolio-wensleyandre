import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CenterItems from "./CenterItems";
import LogoBrand from "./LogoBrand";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#313638] border-b-2 h-24 flex justify-between px-5">
      {/* LEFT BRAND */}
      <LogoBrand />
      {/* CENTER NAV ITEMS */}
      <CenterItems />
      <DropdownMenu>
        <DropdownMenuTrigger className="flex border-2 m-4 p-2 items-center justify-center rounded-2xl bg-[#FAFAFA]">
          Contact
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
