"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";

const Home = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isSignedIn) {
      router.replace("/sign-in");
    } else if (!isOpen) {
      onOpen();
    }
  }, [isSignedIn, isOpen, onOpen, router]);

  return <div className="p-4"></div>;
};

export default Home;