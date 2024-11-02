import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})



const userModel = mongoose.model("userModel", userSchema, "users");


export default userModel