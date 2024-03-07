import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Page from "../../components/layout/Page";
import { photoOfMe } from "@/assets";

const Home = () => {
  return (
    <Page>
      <div className="flex items-center gap-10">
        <img
          src={photoOfMe}
          alt="photo of me"
          className="rounded-full w-[35%] "
        />
        <Card className="">
          <CardHeader>
            <CardTitle>About Me!</CardTitle>
          </CardHeader>
          <CardContent>Just Some placeholder stuff I Suppose</CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Home;
