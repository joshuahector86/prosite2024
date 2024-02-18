import { ReactNode } from "react";
import Topbar from "../shared/Topbar/Topbar";
import Footer from "../shared/Footer/Footer";
import { Link } from "react-router-dom";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col items-center ">
      <div className="absolute top-0 ">
        <Link to="/">Header Temp Link</Link>
        <Topbar />
      </div>
      <div className="p-10 mt-10">{children}</div>
      <div className="absolute bottom-0 h-16">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
