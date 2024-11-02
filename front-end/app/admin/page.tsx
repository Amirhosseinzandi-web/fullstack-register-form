"use client";

import { useState } from "react";
import axios from "axios";




const AdminPage = () => {
    const [inpValue, setInpValue] = useState("");

    const submitHandler = async () => {
        const response = await axios.post("/api/admin", { inpValue });
        // console.log(`the response is => ${JSON.stringify(response , null , 2)}`);
    }

    return (
        <section>
            <h1>This is admin page</h1>
            <p>please write your lesson title !!</p>
            <input onChange={(e) => setInpValue(e.target.value)} value={inpValue} className="border" type="text" placeholder="write your lesson title" />
            <button onClick={submitHandler} className="bg-slate-400 p-2 rounded-md mx-2">submit</button>
        </section>
    );
}

export default AdminPage;