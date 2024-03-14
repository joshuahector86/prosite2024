import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/utils/urls";
import { logo } from "@/assets";
import ContactMeFlyOut from "../ContactMeFlyOut/ContactMeFlyOut";
import { useState } from "react";
import { MenuSquareIcon } from "lucide-react";

const Topbar = () => {
  const location = useLocation();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };
  return (
    <NavigationMenu className=" flex justify-between">
      <Link to="/prosite2024">
        <div className="flex items-center gap-2 text-lg font-semibold ">
          <img src={logo} alt="logo" className=" rounded-full w-16 h-16 " />
          Dimitri Hector
        </div>
      </Link>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem className="hidden md:block" key={link.name}>
            <Link to={link.href}>
              <NavigationMenuLink
                className={` p-2 text-lg border-b-4 border-transparent
               hover:border-zinc-600 flex 
               ${isActive(link.href) ? "border-zinc-600" : ""}
               
               `}
              >
                {link.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem className="hidden md:block">
          <div
            className={`p-[1.5px] text-lg border-b-4 border-transparent hover:border-zinc-600 flex  `}
          >
            <ContactMeFlyOut />
          </div>
        </NavigationMenuItem>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className=""
            style={isMenuOpen ? { display: "none" } : {}}
          >
            <MenuSquareIcon />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col ">
            <Link className="hover:text-zinc-500" to="/home">
              Home
            </Link>
            <Link className="hover:text-zinc-500" to="/experience">
              Experience
            </Link>
          </div>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Topbar;
