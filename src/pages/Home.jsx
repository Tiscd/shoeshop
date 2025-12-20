import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductList from "../Components/ProductList";
export default function Home() {
const { products } = useContext(ProductContext);
const [search, setSearch] = useState("");
const filtered = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
return (
<div>
<input placeholder="Tìm kiếm" value={search} onChange={e => setSearch(e.target.value)} />
<ProductList list={filtered} />
</div>
);
}