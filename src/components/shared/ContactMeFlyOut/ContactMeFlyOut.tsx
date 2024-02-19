import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ContactMeForm } from "./ContactMeForm";

const ContactMeFlyOut = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="flex gap-2 text-lg">
          Contact
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Contact Me</SheetTitle>
          <SheetDescription>
            Fill out the form to send me an email!
          </SheetDescription>
        </SheetHeader>
        <ContactMeForm />
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ContactMeFlyOut;
