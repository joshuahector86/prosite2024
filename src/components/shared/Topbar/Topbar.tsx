import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { navLinks } from "@/utils/urls";
import { logo } from "@/assets";

const Topbar = () => {
  return (
    <NavigationMenu className="w-full flex justify-between">
      <div className="flex items-center gap-2 text-lg font-semibold ">
        <img src={logo} alt="logo" className=" rounded-full w-16 h-16 " />
        Dimitri Hector
      </div>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem>
            <Link to={link.href}>
              <NavigationMenuLink className="p-6 text-lg hover:bg-gray-800  flex rounded-l">
                {link.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Topbar;
