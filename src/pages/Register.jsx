import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Register() {
const { register } = useContext(AuthContext);
const nav = useNavigate();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
function submit() {
if (register({ name, email, pass })) nav("/");
else alert("Email đã tồn tại");
}
return (
<div>
<h2>Đăng ký</h2>
<input placeholder="Họ tên" onChange={e => setName(e.target.value)} />
<input placeholder="Email" onChange={e => setEmail(e.target.value)} />
<input placeholder="Mật khẩu" type="password" onChange={e => setPass(e.target.value)} />
<button onClick={submit}>OK</button>
</div>
);
}