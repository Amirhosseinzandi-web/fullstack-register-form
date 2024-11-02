import { NextResponse } from "next/server";
import connectToDatabase from "../../../../back-end/db/db";
import userModel from "../../../../back-end/models/user-model";





export async function GET() {
    try {

        await connectToDatabase();
        const result = await userModel.find({})


        return NextResponse.json({ status: 200, result })
    }
    catch (err) {
        console.log("error in all course route", err);
        return NextResponse.json({ status: 500 })
    }
}