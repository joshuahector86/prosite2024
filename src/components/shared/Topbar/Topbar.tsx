import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { navLinks } from "@/utils/urls";

const Topbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem>
            <Link to={link.href}>
              <NavigationMenuLink>{link.name}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Topbar;
