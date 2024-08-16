import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Page from "../../components/layout/Page";
import { photoOfMe } from "@/assets";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Page>
      <div className="flex flex-col items-center justify-center ">
        <img
          src={photoOfMe}
          alt="photo of me"
          className="rounded-full w-[12%] "
        />
        <Card className="border-none flex flex-col items-center bg-transparent">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="text-[4rem]">Dimitri Hector</CardTitle>
            <div className="text-[3rem]">Senior Software Engineer</div>
          </CardHeader>
          <CardContent className="max-w-[50rem] text-xl">
            Welcome to my site! I’m a full stack software engineer who is
            constantly learning what the tech world has to offer. I enjoy
            exploring new technology, expanding my understanding of the modern
            tech world, building computers, and just generally getting nerdy.
            This website lists some of my previous professional experience and
            includes links to my personal portfolio site where I place projects
            that were me playing around with various technologies. Feel free to
            reach out to me using the contact form or via LinkedIn. Thanks for
            stopping by!
          </CardContent>
          <HomeButtons />
        </Card>
      </div>
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
    <div className="flex gap-2">
      <Link
        target="_blank"
        to="https://joshuahector86.github.io/portfolio_2023/"
      >
        <Button
          className="font-normal hover:bg-zinc-800 border-zinc-500 min-w-[12rem]"
          variant="outline"
        >
          Personal Portfolio
        </Button>
      </Link>
      <Button
        variant="outline"
        className="hover:bg-zinc-800 border-zinc-500 min-w-[12rem] font-normal"
        onClick={downloadResume}
      >
        DOWNLOAD RESUME
      </Button>
      <Button
        className=" hover:bg-zinc-800 border-zinc-500 min-w-[12rem] font-normal"
        variant="outline"
      >
        CONTACT ME
      </Button>
    </div>
  );
};
export default Home;
