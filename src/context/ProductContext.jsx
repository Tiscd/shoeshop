import { createContext, useState, useEffect } from "react";
export const ProductContext = createContext();
const SAMPLE = [
{ id: 1, title: "Giày Búp Bê", price: 345000, category: "Giày Nữ", image: "https://i.imgur.com/3Kf6Z8x.jpg", desc: "Mềm nhẹ" },
{ id: 2, title: "Balo Caro", price: 250000, category: "Balo - Túi", image: "https://i.imgur.com/7bQ1B0M.jpg", desc: "Ngăn lớn" },
];
export function ProductProvider({ children }) {
const [products, setProducts] = useState([]);
useEffect(() => {
let p = JSON.parse(localStorage.getItem("products"));
if (!p) {
p = SAMPLE;
localStorage.setItem("products", JSON.stringify(p));
}
setProducts(p);
}, []);
function addProduct(prod) {
const list = [...products, prod];
setProducts(list);
localStorage.setItem("products", JSON.stringify(list));
}
function updateProduct(x) {
const list = products.map(p => (p.id === x.id ? x : p));
setProducts(list);
localStorage.setItem("products", JSON.stringify(list));
}
function deleteProduct(id) {
const list = products.filter(p => p.id !== id);
setProducts(list);
localStorage.setItem("products", JSON.stringify(list));
}
return (
<ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
{children}
</ProductContext.Provider>
);
}