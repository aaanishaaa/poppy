"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () =>{
    const StoreModal = useStoreModal();
    return (
        <Modal 
        title="Create Store"
        description="Create a store from here to manage products and categories"
        isOpen={StoreModal.isOpen}
       onClose={StoreModal.onClose}
        >
        Future Create Store Form
        </Modal>
    )
}