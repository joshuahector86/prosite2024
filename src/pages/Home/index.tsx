import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Page from "../../components/layout/Page";
import { photoOfMe } from "@/assets";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Page>
      <div className="flex flex-col gap-10 items-center ">
        <img
          src={photoOfMe}
          alt="photo of me"
          className="rounded-[20px] w-[25%] "
        />
        <Card className="border-none flex flex-col items-center text-xl max-w-[75%]">
          <CardHeader>
            <CardTitle>Welcome! My name is Dimitri Hector</CardTitle>
          </CardHeader>
          <CardContent className="">
            [NEEDS TO BE UPDATED] Welcome to my site! My preferred name is
            Dimitri Hector and I do a lot of computer science and tech things. I
            am an energetic and passionate individual who is constantly in
            search of new challenges and fun to be had! Outside of my technical
            career I am a professional West Coast Swing dancer and full time
            tech/game nerd. Check out this page for details about my experience.
            Thanks for stopping by!
          </CardContent>
        </Card>
        <Link
          target="_blank"
          to="https://joshuahector86.github.io/portfolio_2023/"
        >
          <Button
            variant="outline"
            className="text-2xl p-10 hover:bg-zinc-800 border-zinc-500"
          >
            PERSONAL PORTFOLIO
          </Button>
        </Link>
      </div>
    </Page>
  );
};

export default Home;
