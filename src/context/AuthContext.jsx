import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
const [user, setUser] = useState(null);
useEffect(() => {
const u = JSON.parse(localStorage.getItem("currentUser"));
setUser(u);
}, []);
function login({ email, pass }) {
const users = JSON.parse(localStorage.getItem("users")) || [];
const found = users.find(u => u.email === email && u.pass === pass);
if (!found) return false;
setUser(found);
localStorage.setItem("currentUser", JSON.stringify(found));
return true;
}
function register({ name, email, pass }) {
const users = JSON.parse(localStorage.getItem("users")) || [];
if (users.some(u => u.email === email)) return false;
const newUser = { id: Date.now(), name, email, pass };
users.push(newUser);
localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("currentUser", JSON.stringify(newUser));
setUser(newUser);
return true;
}
function logout() {
setUser(null);
localStorage.removeItem("currentUser");
}
return (
<AuthContext.Provider value={{ user, login, register, logout }}>
{children}
</AuthContext.Provider>
);
}