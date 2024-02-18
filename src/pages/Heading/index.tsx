import { navLinks } from "@/utils/urls";
import { Link } from "react-router-dom";
const Heading = () => {
  const links = navLinks;
  return (
    <div className="flex justify-between items-center h-screen text-2xl">
      {links.map((link) => (
        <div className="hover:text-4xl p-2">
          <Link to={link.href}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Heading;
