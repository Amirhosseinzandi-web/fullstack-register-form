import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./db/db.js";
import userModel from "./models/user-model.js"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());


// connectToDatabase()

app.get("/register", async (req, res) => {

//   

})


app.listen(process.env.SERVER_PORT)


