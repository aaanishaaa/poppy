"use client"

import { StoreModal } from "@/components/modals/store-modal";

import { useEffect,useState } from "react";

export const ModalProvider=()=>{
    // For SERVER SIDE TO AVOID HYDRATION ERRORS
    const [isMounted,setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);
    if(!isMounted){
        return null;
    }
     // For SERVER SIDE
     

     //FOR CLIENT SIDE
    return (
        <>
        <StoreModal/>
        </>
    )
      //FOR CLIENT SIDE
}