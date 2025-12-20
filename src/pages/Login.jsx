import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
const { login } = useContext(AuthContext);
const nav = useNavigate();
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
function submit() {
if (login({ email, pass })) nav("/");
else alert("Sai thông tin đăng nhập");
}
return (
<div>
<h2>Đăng nhập</h2>
<input placeholder="Email" onChange={e => setEmail(e.target.value)} />
<input placeholder="Mật khẩu" type="password" onChange={e => setPass(e.target.value)} />
<button onClick={submit}>OK</button>
</div>
);
}