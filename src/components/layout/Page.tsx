import { ReactNode } from "react";
import Topbar from "../shared/Topbar/Topbar";
import Footer from "../shared/Footer/Footer";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div>
      <Topbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
