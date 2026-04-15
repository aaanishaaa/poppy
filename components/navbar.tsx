'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
    const storeModal = useStoreModal();

    return (
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b">
            <Button 
                variant="outline" 
                onClick={storeModal.onOpen}
                className="flex items-center gap-2">
                Switch Store
            </Button>
            <nav className="flex items-center gap-4 mx-auto">
                <a href="/dashboard" className="text-sm font-medium hover:text-gray-600">
                    Dashboard
                </a>
                <a href="/products" className="text-sm font-medium hover:text-gray-600">
                    Products
                </a>
                <a href="/settings" className="text-sm font-medium hover:text-gray-600">
                    Settings
                </a>
            </nav>
            <div className="ml-auto">
                <UserButton/>
            </div>
        </div>
    );
};

export default Navbar;