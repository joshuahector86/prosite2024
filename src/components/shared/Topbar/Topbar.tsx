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

const Topbar = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };
  return (
    <NavigationMenu className=" flex justify-between">
      <Link to="/">
        <div className="flex items-center gap-2 text-lg font-semibold ">
          <img src={logo} alt="logo" className=" rounded-full w-16 h-16 " />
          Dimitri Hector
        </div>
      </Link>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.name}>
            <Link to={link.href}>
              <NavigationMenuLink
                className={` p-2 text-lg border-b-4 border-transparent
               hover:border-cyan-600 flex 
               ${isActive(link.href) ? "border-cyan-600" : ""}
               
               `}
              >
                {link.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <div
            className={`p-[1.5px] text-lg border-b-4 border-transparent hover:border-cyan-600 flex  `}
          >
            <ContactMeFlyOut />
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Topbar;
