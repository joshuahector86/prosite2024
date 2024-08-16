import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/utils/urls";
import { MenuSquareIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const Topbar = () => {
  const location = useLocation();

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
               hover:text-[#ff2600] flex 
               ${isActive(link.href) ? "text-[#ff2600]" : ""}
               
               `}
              >
                {link.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden p-2">
            <MenuSquareIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex gap-4">
            <DropdownMenuItem>
              <Link className="hover:text-zinc-500" to="/">
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="hover:text-zinc-500" to="/experience">
                Experience
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Topbar;
