import { ReactNode } from "react";
import Topbar from "../shared/Topbar/Topbar";
import Footer from "../shared/Footer/Footer";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Topbar />
      <div className="mt-10 flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
