import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ContactMeForm } from "./ContactMeForm";
import { SendHorizonalIcon } from "lucide-react";

interface ContactMeFlyOutProps {
  icon?: React.ReactNode;
}

const ContactMeFlyOut: React.FC<ContactMeFlyOutProps> = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="outline"
          className="flex gap-2 hover:text-[#ff2600] items-center hover:bg-transparent hover:border-[#ff2600] border-zinc-500 w-[12rem] font-normal"
        >
          <SendHorizonalIcon size={15} color="#ff2600" />
          CONTACT ME
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <ContactMeForm />
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ContactMeFlyOut;
