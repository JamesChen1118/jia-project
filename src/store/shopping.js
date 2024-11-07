import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
    persist(
        (set) => ({
            cartItems: [],

            addToCart: (product, quantity) => set((state) => {
                const existingItem = state.cartItems.find(item => item.name === product.name);

                if (existingItem) {
                    return {
                        cartItems: state.cartItems.map(item =>
                            item.name === product.name
                                ? { ...item, numbers: item.numbers + quantity }
                                : item
                        )
                    };
                }

                return {
                    cartItems: [...state.cartItems, {
                        id: Date.now(),
                        name: product.name,
                        price: product.price,
                        numbers: quantity,
                        image: product.image
                    }]
                };
            }),

            updateQuantity: (id, change) => set((state) => ({
                cartItems: state.cartItems.map(item =>
                    item.id === id
                        ? { ...item, numbers: Math.max(0, item.numbers + change) }
                        : item
                ).filter(item => item.numbers > 0)
            })),

            removeItem: (id) => set((state) => ({
                cartItems: state.cartItems.filter(item => item.id !== id)
            })),

            clearCart: () => set({ cartItems: [] })
        }),
        {
            name: 'cart-storage'
        }
    )
); 