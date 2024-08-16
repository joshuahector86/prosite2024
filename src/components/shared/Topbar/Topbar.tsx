import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/utils/urls";
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
    <NavigationMenu className="flex justify-center p-2 ">
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

        {/* Hamburger Menu */}
        <div className="md:hidden absolute  top-0">
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
            <Link className="hover:text-zinc-500" to="/">
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
