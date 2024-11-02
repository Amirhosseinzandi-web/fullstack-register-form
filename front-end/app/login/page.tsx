"use client";
import { useRef, useState } from "react";
import axios from "axios";





const LoginPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const h2Ref = useRef<HTMLHeadingElement>(null);


    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            const response = await axios.post("/api/login", { name, email, password });
            if (response.status === 200) {
                if (h2Ref.current) {
                    h2Ref.current.innerText = "login successful";
                }
            }
        }
        catch (err) {
            console.log("error login page handle submit", err);

        }
    }




    return (
        <section className="w-full h-[100dvh] flex justify-center items-center">
            <h2 ref={h2Ref}></h2>
            <form onSubmit={handleSubmit} className="w-[40%] h-[50%] border-2 border-gray-600 flex flex-col items-center justify-evenly rounded-md">
                <h1 className="my-2">login</h1>
                <input onChange={(e) => setEmail(e.target.value)} className="my-1 rounded p-2 border border-gray-500" type="text" placeholder="email..." />
                <input onChange={(e) => setPassword(e.target.value)} className="my-1 rounded p-2 border border-gray-500" type="text" placeholder="password..." />
                <button>Login</button>
            </form>
        </section>
    );
}

export default LoginPage;