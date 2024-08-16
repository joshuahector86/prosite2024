import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import { GalleryVertical, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-between border-t-[1px] p-2 items-center ">
      <div className="flex gap-4">
        <Link
          className="hover:text-[#ff2600]"
          target="_blank"
          to="https://github.com/joshuahector86"
        >
          <Github />
        </Link>
        <Link
          className="hover:text-[#ff2600]"
          target="_blank"
          to="https://www.linkedin.com/in/dimitri-hector-a113b9149/"
        >
          <Linkedin />
        </Link>
        <Link
          className="hover:text-[#ff2600]"
          target="_blank"
          to="https://joshuahector86.github.io/portfolio_2023/"
        >
          <GalleryVertical />
        </Link>
      </div>
      <div>
        <Copyright year={2024} owner="Dimitri Hector" />
      </div>
    </div>
  );
};

export default Footer;
