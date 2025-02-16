import { useState, useEffect, useMemo} from "react"
import { db } from '../data/db'
import type { Guitar, CartItem } from '../types'

export default function useCart() {
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
      }
    
      const [data] = useState(db)
      const [cart, setCart] = useState(initialCart)
    
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
      }, [cart])
    
      const addToCart = (item : Guitar) => {
    
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExists >= 0) {
          if(cart[itemExists].quantity >= 10) return
          const updatedCart = [...cart]
          updatedCart[itemExists].quantity += 1
          setCart(updatedCart)
        }else{
          const newItem : CartItem = {...item, quantity: 1}
          setCart(prevCart => [...prevCart, newItem])
        }
      }
    
      // eliminar un item del carrito
      const removeFromCart = (id : Guitar['id']) => {
        setCart(() => cart.filter(guitar => guitar.id !== id))
      }
    
      // aumentar cantidad de un item
      const increaseQuantity = (id : Guitar['id']) => {
        const updatedCart = cart.map( guitar => {
          if(guitar.id === id && guitar.quantity < 10){
            guitar.quantity += 1
          }
          return guitar
        })
        setCart(updatedCart)
      }
    
      // disminuir cantidad de un item
      const decreaseQuantity = (id : Guitar['id']) => {
        /*
        const updatedCart = [...cart]
        const itemIndex = updatedCart.findIndex(guitar => guitar.id === id)
        if(updatedCart[itemIndex].quantity > 1){
          updatedCart[itemIndex].quantity -= 1
          setCart(updatedCart)
        }else{
          setCart(() => cart.filter(guitar => guitar.id !== id))
        }
        */
        const updatedCart = cart
        .filter(guitar => guitar.id !== id || (guitar.id === id && guitar.quantity > 1))
        .map( guitar => {
          if(guitar.id === id){
            guitar.quantity -= 1
          }
          return guitar
        })
        setCart(updatedCart)
      }
    
      // vaciar el carrito
      const emptyCart = () => {
        setCart([])
      }

      // state derivado
    const isEmpty = useMemo(() => cart.length === 0, [cart])
      
    const cartTotal = useMemo(() => (cart.reduce((total, item) => (total + item.price * item.quantity), 0)), [cart])

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        emptyCart,
        isEmpty,
        cartTotal
    }
}
