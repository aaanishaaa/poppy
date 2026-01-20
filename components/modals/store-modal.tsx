"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(10),
});

export const StoreModal = () => {
  const StoreModal = useStoreModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone:"",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Modal
      title="Create Store"
      description="Create a store from here to manage products and categories"
      isOpen={StoreModal.isOpen}
      onClose={StoreModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField 
                control={form.control}
                name="name"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl><Input placeholder="Name of the Store" {...field}/></FormControl>
                        {/* <FormLabel>How you doin</FormLabel> */}
                        <FormMessage/>
                    </FormItem>
                )}
                /> 
                <FormField 
                control={form.control}
                name="phone"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Heyy</FormLabel>
                        <FormControl><Input placeholder="Phone Number" {...field}/></FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                /> 
                <div className="pt-6 flex items-center space-x-2 justify-end w-full">
                    <Button type="button" variant={"destructive"} onClick={StoreModal.onClose}>Cancel</Button>
                    <Button type="submit">Continue</Button>
                </div>
                </form>
            </Form>
        </div>
      </div>
    </Modal>
  );
};
