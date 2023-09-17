import { Product } from '@/types';
import { create } from 'zustand'

interface useModalStoreProps {
    data?: Product;
    isOpen: boolean;
    onOpen: (data: Product) => void;
    onClose: () => void;
}

export const useModalStore = create<useModalStoreProps>((set) => ({
    data: undefined,
    isOpen: false,
    onOpen: (data: Product) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false }),
}))