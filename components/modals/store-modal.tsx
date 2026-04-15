"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const StoreModal = useStoreModal();
  const [loading,setLoading]=useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      setLoading(true);
      const response = await axios.post('/api/stores',values);
      window.location.assign(`/${response.data.id}`);
    }catch(error){
      console.log(error);
    } finally{
      setLoading(false);
    }
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
                        <FormControl><Input disabled={loading} placeholder="Name of the Store" {...field}/></FormControl>
                        {/* <FormLabel>How you doin</FormLabel> */}
                        <FormMessage/>
                    </FormItem>
                )}
                /> 
                    <div className="pt-6 flex items-center space-x-2 justify-end w-full">
                    <Button disabled={loading} type="button" variant={"destructive"} onClick={StoreModal.onClose}>Cancel</Button>
                    <Button disabled={loading} type="submit">Continue</Button>
                </div>
                </form>
            </Form>
        </div>
      </div>
    </Modal>
  );
};
