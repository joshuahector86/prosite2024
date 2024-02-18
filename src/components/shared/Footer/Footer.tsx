import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import { CircleUser, GalleryVertical, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="  flex justify-between border-t-[1px] p-2 items-center ">
      <div className="flex gap-4">
        <Link target="_blank" to="https://github.com/joshuahector86">
          <Github />
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/dimitri-hector-a113b9149/"
        >
          <Linkedin />
        </Link>
        <Link
          target="_blank"
          to="https://joshuahector86.github.io/portfolio_2023/"
        >
          <GalleryVertical />
        </Link>
      </div>
      <div>
        <Copyright year={2024} owner="Dimitri Hector" />
      </div>
      <Button className="flex gap-2">
        <CircleUser />
        Contact Me
      </Button>
    </div>
  );
};

export default Footer;
