import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Heading = () => {
  return (
    <div className="flex justify-center items-center h-screen text-2xl">
      <Link to="/home">
        <Button
          className="text-2xl p-8 hover:bg-zinc-900 border-zinc-900"
          variant={"outline"}
        >
          To The Site!
        </Button>
      </Link>
    </div>
  );
};

export default Heading;
