import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();
export function CartProvider({ children }) {
const [cart, setCart] = useState([]);
useEffect(() => {
const c = JSON.parse(localStorage.getItem("cart")) || [];
setCart(c);
}, []);
function addToCart(prod) {
const list = [...cart, prod];
setCart(list);
localStorage.setItem("cart", JSON.stringify(list));
}
function removeFromCart(id) {
const list = cart.filter(i => i.id !== id);
setCart(list);
localStorage.setItem("cart", JSON.stringify(list));
}
function clearCart() {
setCart([]);
localStorage.setItem("cart", "[]");
}
return (
<CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
{children}
</CartContext.Provider>
);
}