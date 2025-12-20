import { Link } from "react-router-dom";
export default function ProductCard({ item }) {
return (
<div className="card">
<img src={item.image} alt="sp" />
<h3>{item.title}</h3>
<p>{item.price.toLocaleString()}đ</p>
<Link to={`/product/${item.id}`}>Xem chi tiết</Link>
</div>
);
}