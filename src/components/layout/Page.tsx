import { ReactNode } from "react";
import Topbar from "../shared/Topbar/Topbar";
import Footer from "../shared/Footer/Footer";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className=" h-screen flex flex-col  ">
      <div className="p-4">
        <Topbar />
      </div>
      <div className="flex-grow p-4">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
