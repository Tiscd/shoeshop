import ProductCard from "./ProductCard";
export default function ProductList({ list }) {
return (
<div className="grid">
{list.map(p => <ProductCard key={p.id} item={p} />)}
</div>
);
}