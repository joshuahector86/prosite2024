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
      <div className="flex flex-col items-center w-full max-w-[52rem]">
        {/* Hero */}
        <div className="flex flex-col items-center gap-5 mb-14 animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3483C9] to-[#ff2600] opacity-20 blur-2xl scale-125 pointer-events-none" />
            <img
              src={photoOfMe}
              alt="photo of me"
              className="relative rounded-full lg:w-[16rem] md:w-[14rem] w-[10rem] ring-1 ring-white/10 shadow-2xl"
            />
          </div>

          <div className="text-center">
            <h1 className="text-[2rem] sm:text-[3.5rem] font-bold tracking-tight leading-none">
              Dimitri Hector
            </h1>
            <h4 className="text-[1.1rem] sm:text-[1.6rem] text-[#3483C9] mt-2 tracking-wide">
              Senior Software Engineer
            </h4>
          </div>

          <p className="text-base sm:text-lg text-center text-muted-foreground max-w-[40rem] leading-relaxed animate-fade-up-1">
            {ExperienceInfo.experience.proSummary}
          </p>

          <div className="animate-fade-up-2">
            <HomeButtons />
          </div>
        </div>

        {/* Section Divider */}
        <div className="w-full flex items-center gap-4 mb-10 animate-fade-up-2">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground select-none">
            Experience
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Experience */}
        <div className="w-full animate-fade-up-3">
          <ExperienceCard />
        </div>
      </div>
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
          className="w-[15rem] font-normal hover:text-[#ff2600] hover:bg-transparent hover:border-[#ff2600] border-zinc-500 flex gap-2 items-center transition-all duration-200"
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