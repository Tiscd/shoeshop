import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
export default function Cart() {
const { cart, removeFromCart } = useContext(CartContext);
return (
<div>
<h2>Giỏ hàng</h2>
{cart.map(i => (
<div key={i.id}>
<img src={i.image} width={80} /> {i.title}
<button onClick={() => removeFromCart(i.id)}>Xóa</button>
</div>
))}
<Link to="/checkout">Thanh toán</Link>
</div>
);
}