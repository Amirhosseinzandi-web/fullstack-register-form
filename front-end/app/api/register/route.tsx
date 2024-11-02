import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "../../../../back-end/db/db.js"
import userModel from "../../../../back-end/models/user-model.js"




export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();
        const { name, email, password } = await request.json();
        const isUserExist = await userModel.findOne({ email });

        if (isUserExist) {
            console.log("User already exists");

            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        await userModel.create({ name, email, password });

        return NextResponse.json({ message: "Registration successful" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error occurred" }, { status: 500 });
    }
}
