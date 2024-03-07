import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ContactMeForm } from "./ContactMeForm";

interface ContactMeFlyOutProps {
  icon?: React.ReactNode;
}

const ContactMeFlyOut: React.FC<ContactMeFlyOutProps> = ({ icon }: any) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="flex gap-2 text-lg">
          {icon && <div>{icon}</div>}
          Contact
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle className="mb-2">Contact Me</SheetTitle>
        </SheetHeader>
        <ContactMeForm />
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ContactMeFlyOut;
