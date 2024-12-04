import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
    cartItems: [],
    isProcessing: false,

    // 添加 getTotalAmount 方法
    getTotalAmount: () => {
        const state = get();
        return state.cartItems.reduce((total, item) =>
            total + (item.price * item.numbers), 0
        );
    },

    addToCart: (product, quantity) => {
        set(state => {
            const existingItem = state.cartItems.find(item => item.id === product.id);
            if (existingItem) {
                return {
                    cartItems: state.cartItems.map(item =>
                        item.id === product.id
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
                item.id === productId
                    ? { ...item, numbers: Math.max(0, item.numbers + change) }
                    : item
            ).filter(item => item.numbers > 0)
        }));
    },

    removeItem: (productId) => {
        set(state => ({
            cartItems: state.cartItems.filter(item => item.id !== productId)
        }));
    },

    clearCart: () => {
        set({ cartItems: [] });
    }
}));