import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SendHorizonalIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ContactMeFlyOutProps {
  icon?: React.ReactNode;
}

const ContactMeFlyOut: React.FC<ContactMeFlyOutProps> = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="outline"
          className="mb-1 w-[15rem] flex gap-2 hover:text-[#ff2600] items-center hover:bg-transparent hover:border-[#ff2600] border-zinc-500  font-normal"
        >
          <SendHorizonalIcon size={15} color="#ff2600" />
          CONTACT ME
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className="bg-black">
        <Card className="flex flex-col items-center p-10 mt-10 bg-[#111111] hover:bg-black hover:border-[#ff2600]">
          <CardHeader>Linkedin</CardHeader>
          <CardDescription>
            <Link
              className="underline hover:text-[#ff2600]"
              target="_blank"
              to="https://www.linkedin.com/in/dimitri-hector-a113b9149/"
            >
              Dimitri-Hector
            </Link>
          </CardDescription>
        </Card>
        <Card className="flex flex-col items-center p-10 mt-10 bg-[#111111] hover:bg-black hover:border-[#ff2600]">
          <CardHeader>Email</CardHeader>
          <CardDescription>joshuahector86@gmail.com</CardDescription>
        </Card>
        <Card className="flex flex-col items-center p-10 mt-10 bg-[#111111] hover:bg-black  hover:border-[#ff2600]">
          <CardHeader>Location</CardHeader>
          <CardDescription>New York, USA</CardDescription>
        </Card>
      </SheetContent>
    </Sheet>
  );
};

export default ContactMeFlyOut;
