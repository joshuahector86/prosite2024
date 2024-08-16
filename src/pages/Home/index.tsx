import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Page from "../../components/layout/Page";
import { photoOfMe } from "@/assets";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactMeFlyOut from "@/components/shared/ContactMeFlyOut/ContactMeFlyOut";
import { DownloadIcon, GalleryVertical } from "lucide-react";

const Home = () => {
  return (
    <Page>
      <Card className="border-none flex flex-col items-center bg-transparent">
        <img
          src={photoOfMe}
          alt="photo of me"
          className="rounded-full lg:w-[20rem] md:w-[15rem] w-[10rem]"
        />
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-[4rem]">Dimitri Hector</CardTitle>
          <div className="text-[3rem]">Senior Software Engineer</div>
        </CardHeader>
        <CardContent className="max-w-[50rem] text-xl text-wrap">
          Welcome to my site! I’m a full stack software engineer who is
          constantly learning what the tech world has to offer. I enjoy
          exploring new technology, expanding my understanding of the modern
          tech world, building computers, and just generally getting nerdy. This
          website lists some of my previous professional experience and includes
          links to my personal portfolio site where I place projects that were
          me playing around with various technologies. Feel free to reach out to
          me using the contact form or via LinkedIn. Thanks for stopping by!
        </CardContent>
        <HomeButtons />
      </Card>
    </Page>
  );
};

const HomeButtons = () => {
  const downloadResume = () => {
    const pdfUrl = "joshua_hector_resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Joshua_Hector_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col gap-2  md:flex-row ">
      <Link
        target="_blank"
        to="https://joshuahector86.github.io/portfolio_2023/"
      >
        <Button
          className="font-normal hover:text-[#ff2600] hover:bg-transparent hover:border-[#ff2600] border-zinc-500 flex gap-2 items-center"
          variant="outline"
        >
          <GalleryVertical size={15} color="#ff2600" />
          PERSONAL PORTFOLIO
        </Button>
      </Link>
      <Button
        variant="outline"
        className="hover:bg-transparent hover:text-[#ff2600] hover:border-[#ff2600] border-zinc-500  font-normal flex gap-2 items-center"
        onClick={downloadResume}
      >
        <DownloadIcon size={15} color="#ff2600" />
        DOWNLOAD RESUME
      </Button>
      <ContactMeFlyOut />
    </div>
  );
};
export default Home;
