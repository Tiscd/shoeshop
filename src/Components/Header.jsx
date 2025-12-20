import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
export default function Header() {
const { user, logout } = useContext(AuthContext);
return (
<header className="header">
<Link to="/" className="logo">MWC Clone</Link>
<nav>
<Link to="/">Sản phẩm</Link>
<Link to="/cart">Giỏ hàng</Link>
{user ? (
<>
<span>Xin chào {user.name}</span>
<button onClick={logout}>Đăng xuất</button>
</>
) : (
<>
<Link to="/login">Đăng nhập</Link>
<Link to="/register">Đăng ký</Link>
</>
)}
</nav>
</header>
);
}