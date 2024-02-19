import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { navLinks } from "@/utils/urls";
import { logo } from "@/assets";
import ContactMeFlyOut from "../ContactMeFlyOut/ContactMeFlyOut";

const Topbar = () => {
  return (
    <NavigationMenu className=" flex justify-between">
      <div className="flex items-center gap-2 text-lg font-semibold ">
        <img src={logo} alt="logo" className=" rounded-full w-16 h-16 " />
        Dimitri Hector
      </div>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.name}>
            <Link to={link.href}>
              <NavigationMenuLink className=" p-2 text-lg border-b-4 border-transparent hover:border-cyan-600 flex ">
                {link.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <div className="p-1 text-lg border-b-4 border-transparent hover:border-cyan-600  flex rounded-l">
            <ContactMeFlyOut />
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Topbar;
