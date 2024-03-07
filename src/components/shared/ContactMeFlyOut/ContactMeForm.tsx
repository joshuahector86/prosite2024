import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

export const ContactMeForm = () => {
  const formSchema = z.object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(50, { message: "NMax 50 Characters" }),
    email: z.string().email(),
    inquiry: z
      .string()
      .min(2, { message: "Inquiry must be at least 2 characters" })
      .max(500, { message: "NMax 500 Characters" }),
    message: z
      .string()
      .min(2, { message: "Messsage must be at least 2 characters" })
      .max(500, { message: "NMax 500 Characters" }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiry: "",
      message: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await formSchema.parseAsync(values);
      console.log("it worked");
    } catch (error) {
      console.log("It didnt work");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="inquiry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How did you find my site?</FormLabel>
              <FormControl>
                <Input placeholder="Inquiry" type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>message</FormLabel>
              <FormControl>
                <Input placeholder="Message" type="message" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant={"outline"}>
          Submit
        </Button>
      </form>
    </Form>
  );
};
