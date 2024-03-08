import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(3, "name is required"),
  addressLine1: z.string().min(3, "addressLine1 is required"),
  addressLine2: z.string().min(3, "addressLine2 is required"),
  country: z.string().min(3, "country is required"),
  city: z.string().min(3, "city is required"),
});

type UserFormData = z.infer<typeof formSchema>;
type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
  });
  const fieldNames: (
    | "email"
    | "name"
    | "addressLine1"
    | "addressLine2"
    | "country"
    | "city"
  )[] = ["addressLine1", "addressLine2", "city", "country"];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold ">User Profile Form</h2>
          <FormDescription>
            View and change your profile information here
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white " disabled />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-4">
          {fieldNames.map((fieldName) => (
            <FormField
              key={fieldName}
              control={form.control}
              name={fieldName}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>{fieldName}</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white" />
                  </FormControl>
                  <FormMessage  />
                </FormItem>
              )}
            />
          ))}
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button className="bg-orange-500" type="submit">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
