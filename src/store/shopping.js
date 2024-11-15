import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set) => ({
            cartItems: [],

            addToCart: (product, quantity) =>
                set((state) => {
                    const existingItem = state.cartItems.find(
                        (item) => item.name === product.name
                    );

                    if (existingItem) {
                        return {
                            cartItems: state.cartItems.map((item) =>
                                item.name === product.name
                                    ? { ...item, quantity: item.quantity + quantity }
                                    : item
                            ),
                        };
                    }

                    return {
                        cartItems: [
                            ...state.cartItems,
                            {
                                ...product,
                                quantity,
                            },
                        ],
                    };
                }),

            updateQuantity: (id, change) =>
                set((state) => ({
                    cartItems: state.cartItems
                        .map((item) =>
                            item.id === id
                                ? { ...item, quantity: Math.max(0, item.quantity + change) }
                                : item
                        )
                        .filter((item) => item.quantity > 0),
                })),

            removeItem: (id) =>
                set((state) => ({
                    cartItems: state.cartItems.filter((item) => item.id !== id),
                })),

            clearCart: () => set({ cartItems: [] }),
        }),
        {
            name: "cart-storage",
        }
    )
);
