import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
    cartItems: [],
    isProcessing: false,


    getTotalAmount: () => {
        const state = get();
        return state.cartItems.reduce((total, item) =>
            total + (item.price * item.numbers), 0
        );
    },

    addToCart: (product, quantity) => {
        set(state => {
            const existingItem = state.cartItems.find(item => item._id === product._id);
            if (existingItem) {
                return {
                    cartItems: state.cartItems.map(item =>
                        item._id === product._id
                            ? { ...item, numbers: item.numbers + quantity }
                            : item
                    )
                };
            }
            return {
                cartItems: [...state.cartItems, { ...product, numbers: quantity }]
            };
        });
    },

    updateQuantity: (productId, change) => {
        set(state => ({
            cartItems: state.cartItems.map(item =>
                item._id === productId
                    ? { ...item, numbers: Math.max(1, item.numbers + change) }
                    : item
            )
        }));
    },

    removeItem: (productId) => {
        set(state => ({
            cartItems: state.cartItems.filter(item => item._id !== productId)
        }));
    },

    clearCart: () => set({ cartItems: [] })
}));