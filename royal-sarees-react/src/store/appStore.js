import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      // Auth state
      user: null,
      isAuthenticated: false,
      
      // Cart state
      cart: [],
      cartTotal: 0,
      
      // Wishlist state
      wishlist: [],
      
      // UI state
      currency: 'INR',
      currencyRates: {
        INR: 1,
        USD: 0.012,
        GBP: 0.0095,
        AED: 0.044,
      },
      currencySymbols: {
        INR: '₹',
        USD: '$',
        GBP: '£',
        AED: 'د.إ',
      },

      // Auth actions
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      logout: () => set({ user: null, isAuthenticated: false }),

      // Cart actions
      addToCart: (product, quantity = 1) => set((state) => {
        const existingItem = state.cart.find(item => item.id === product.id);
        let newCart;
        
        if (existingItem) {
          newCart = state.cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          newCart = [...state.cart, { ...product, quantity }];
        }

        const total = newCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return { cart: newCart, cartTotal: total };
      }),

      removeFromCart: (productId) => set((state) => {
        const newCart = state.cart.filter(item => item.id !== productId);
        const total = newCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return { cart: newCart, cartTotal: total };
      }),

      updateCartQuantity: (productId, quantity) => set((state) => {
        if (quantity <= 0) return state;
        
        const newCart = state.cart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        );
        const total = newCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return { cart: newCart, cartTotal: total };
      }),

      clearCart: () => set({ cart: [], cartTotal: 0 }),

      // Wishlist actions
      addToWishlist: (product) => set((state) => {
        const exists = state.wishlist.find(item => item.id === product.id);
        if (exists) return state;
        return { wishlist: [...state.wishlist, product] };
      }),

      removeFromWishlist: (productId) => set((state) => ({
        wishlist: state.wishlist.filter(item => item.id !== productId)
      })),

      isInWishlist: (productId) => {
        const state = useStore.getState();
        return state.wishlist.some(item => item.id === productId);
      },

      // Currency actions
      setCurrency: (currency) => set({ currency }),

      // Utility functions
      getFormattedPrice: (price) => {
        const state = useStore.getState();
        const converted = price * state.currencyRates[state.currency];
        const symbol = state.currencySymbols[state.currency];
        
        return `${symbol}${converted.toFixed(2)}`;
      },
    }),
    {
      name: 'royal-sarees-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        currency: state.currency,
        user: state.user,
      }),
    }
  )
);

