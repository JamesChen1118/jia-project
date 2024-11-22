import { create } from "zustand";

export const useCartStore = create((set, get) => ({
    cartItems: [],
    
    addToCart: (product, quantity = 1) => {
        set((state) => {
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
                    ...product, 
                    numbers: quantity,
                    id: Date.now().toString()
                }]
            };
        });
    },
    
    updateQuantity: (productId, change) => {
        set((state) => ({
            cartItems: state.cartItems.map(item => {
                if (item.id === productId) {
                    const newNumbers = Math.max(0, item.numbers + change);
                    return { ...item, numbers: newNumbers };
                }
                return item;
            }).filter(item => item.numbers > 0)
        }));
    },
    
    removeItem: (productId) => {
        set((state) => ({
            cartItems: state.cartItems.filter(item => item.id !== productId)
        }));
    },
    
    clearCart: () => {
        set({ cartItems: [] });
    },
    
    getTotalAmount: () => {
        const state = get();
        return state.cartItems.reduce((total, item) => {
            return total + (item.price * item.numbers);
        }, 0);
    },
    
    getTotalItems: () => {
        const state = get();
        return state.cartItems.reduce((total, item) => total + item.numbers, 0);
    }
}));
