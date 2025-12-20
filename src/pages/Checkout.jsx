import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function Checkout() {
const { cart, clearCart } = useContext(CartContext);
const total = cart.reduce((s, i) => s + i.price, 0);
function pay() {
alert("Thanh toán thành công!");
clearCart();
}
return (
<div>
<h2>Thanh toán</h2>
<p>Tổng: {total.toLocaleString()}đ</p>
<button onClick={pay}>Thanh toán</button>
</div>
);
}