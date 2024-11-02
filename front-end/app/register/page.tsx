"use client";
import { useState } from "react";
import axios from "axios";





const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.post("/api/register", { name, email, password });
        console.log(response);
    }




    return (
        <section className="w-full h-[100dvh] flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-[40%] h-[50%] border-2 border-gray-600 flex flex-col items-center justify-evenly rounded-md">
                <h1 className="my-2">Register</h1>
                <input onChange={(e) => setName(e.target.value)} className="my-1 rounded p-2 border border-gray-500" type="text" placeholder="username..." />
                <input onChange={(e) => setPassword(e.target.value)} className="my-1 rounded p-2 border border-gray-500" type="text" placeholder="example 123..." />
                <input onChange={(e) => setEmail(e.target.value)} className="my-1 rounded p-2 border border-gray-500" type="email" placeholder="email..." />
                <button>Register</button>
            </form>
        </section>
    );
}

export default RegisterPage;