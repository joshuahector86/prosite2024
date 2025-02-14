import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { photoOfMe } from "@/assets";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactMeFlyOut from "@/components/shared/ContactMeFlyOut/ContactMeFlyOut";
import { GalleryVertical } from "lucide-react";
import Page from "./components/layout/Page";
import { ExperienceInfo } from "./Experience/info";
import ExperienceCard from "./Experience/ExperienceCard";

function App() {
  return (
    <Page>
      <Card className="border-none flex flex-col items-center bg-transparent max-w-[50rem]">
        <img
          src={photoOfMe}
          alt="photo of me"
          className="rounded-full lg:w-[20rem] md:w-[15rem] w-[10rem]"
        />
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="flex flex-col items-center gap-4">
            <h1 className="text-[2rem] sm:text-[4rem]">Dimitri Hector</h1>
            <h4 className="text-[1.5rem] sm:text-[2.5rem] text-[#3483C9]">
              Senior Software Engineer
            </h4>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p className="p-6 text-xl">{ExperienceInfo.experience.proSummary}</p>
          <HomeButtons />
          <ExperienceCard />
        </CardContent>
      </Card>
    </Page>
  );
}

const HomeButtons = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <Link
        target="_blank"
        to="https://portfolio-joshuahector86s-projects.vercel.app"
      >
        <Button
          className="w-[15rem] font-normal hover:text-[#ff2600] hover:bg-transparent hover:border-[#ff2600] border-zinc-500 flex gap-2 items-center"
          variant="outline"
        >
          <GalleryVertical size={15} color="#ff2600" />
          PERSONAL PORTFOLIO
        </Button>
      </Link>
      <ContactMeFlyOut />
    </div>
  );
};

export default App;
