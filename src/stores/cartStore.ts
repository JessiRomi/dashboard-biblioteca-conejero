import { defineStore } from 'pinia'
import type { Book, BookInCart } from '@/models/Book'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as BookInCart[],
  }),
  getters: {
    totalItems: (state) => state.cart.reduce((acc, item) => acc + item.qty, 0),
    totalPrice: (state) => state.cart.reduce((acc, item) => acc + item.price * item.qty, 0),
  },
  actions: {
  
    addBook(book: Book) {
      const existing = this.cart.find((b) => b.id === book.id)
      if (existing) {
        existing.qty += 1
      } else {
        this.cart.push({ ...book, qty: 1 })
      }
    },

    removeBook(id: number) {
      this.cart = this.cart.filter((b) => b.id !== id)
    },

    clearCart() {
      this.cart = []
    },
  },
})

    

    
   