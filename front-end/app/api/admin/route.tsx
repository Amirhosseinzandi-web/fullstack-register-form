import { NextResponse } from "next/server"
import connectToDatabase from "../../../../back-end/db/db";
import userModel from "../../../../back-end/models/user-model";




export async function POST(request: Request) {
    try {
        await connectToDatabase();
        const { inpValue } = await request.json();
        await userModel.create({ name: inpValue })


        return NextResponse.json({ status: 200 })

    }
    catch (err) {
        console.log("error in admin route", err);
        return NextResponse.json({ status: 500 })
    }
}