 import { ref } from 'vue'
 import { defineStore } from 'pinia'

 
   interface BookInCart {
     id: number
     title: string
     author: string
     price: number
   }

 export const useBookStore = defineStore('book',{
    state: () => ({
        cart: [] as BookInCart[]
    }),
    actions: {
        addTBook(book: BookInCart) {
            this.cart.push(book)
        },
        removeBook(book: BookInCart) {
            this.cart = this.cart.filter(book => book.id !== book.id)
        }

     
 }
 })
    
   