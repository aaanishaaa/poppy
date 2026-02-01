"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";

const Home = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
   if(!isOpen){
    onOpen();
   }
   },[isOpen,onOpen]);

  return null;
};

export default Home;