import { NextResponse } from "next/server";
import connectToDatabase from "../../../../back-end/db/db.js";
import userModel from "../../../../back-end/models/user-model.js";



export async function POST(request: Request) {
    try {

        await connectToDatabase();

        const { email, password } = await request.json();
        console.log(email, password);

        const currentUser = await userModel.findOne({ email });
        if (!currentUser) {
            console.log("User not found");

            return NextResponse.json({ message: "user not found" }, { status: 404 });
        }
        const result = `
            <h1>خوش آمدید!</h1>
            <p>اطلاعات کاربر:</p>
            <ul>
              <li>ایمیل: ${currentUser.email}</li>
              <li>نام کاربری: ${currentUser.name}</li>
            </ul>
          `;
        return NextResponse.json({ message: "login successful", result }, { status: 200 });

    }
    catch (err) {
        console.log("error in login route", err);

    }
}