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
