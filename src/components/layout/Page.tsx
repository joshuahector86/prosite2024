import { ReactNode } from "react";
import Footer from "../shared/Footer/Footer";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div>
      <div className="flex justify-center p-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
