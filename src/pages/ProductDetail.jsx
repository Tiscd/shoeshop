import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
export default function ProductDetail() {
const { id } = useParams();
const { products } = useContext(ProductContext);
const { addToCart } = useContext(CartContext);
const p = products.find(x => x.id == id);
if (!p) return <h2>Không tìm thấy sản phẩm</h2>;
return (
<div>
<img src={p.image} width={300} />
<h2>{p.title}</h2>
<p>{p.price.toLocaleString()}đ</p>
<p>{p.desc}</p>
<button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
</div>
);
}