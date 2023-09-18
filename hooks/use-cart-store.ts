import { Product } from '@/types';
import toast from 'react-hot-toast';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface useCartStoreProps {
    items: Product[];
    addItem: (data: Product) => void;
    deleteItem: (id: string) => void;
    removeAll: () => void;
}

export const useCart = create(
    persist<useCartStoreProps>((set, get) => ({
        items: [],
        addItem: (product: Product) => {


            const currentItems = get().items;
            const existingItem = currentItems.find(item => item.id === product.id);
            if (existingItem) return toast.error(`You've already added this item to Your Cart`)

            set({ items: [...get().items, product] });
            toast.success('Item has been added!')

        },
        deleteItem: (id: string) => set({ items: [...get().items.filter(item => item.id !== id)] }),
        removeAll: () => set({ items: [] }),
    }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)