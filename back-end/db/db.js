import mongoose from "mongoose"





const connectToDatabase = async () => {
    console.log("DB_HOST:", process.env.DB_HOST); 
    try {
        await mongoose.connect(process.env.DB_HOST)
        console.log("connected to database");

    }
    catch (err) {
        console.log("error in database connection", err);
    }

}


export default connectToDatabase