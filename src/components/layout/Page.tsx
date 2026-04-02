import { ReactNode } from "react";
import Footer from "../shared/Footer/Footer";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex justify-center px-4 py-12">{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
