import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";    
import Property from "@/models/Property";

export async function GET(request: Request) {
    try {
        await dbConnect();
        const properties = await Property.find({}).sort({ createdAt: -1 });
        return NextResponse.json(properties);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch properties" },
            { status: 500 }
        );
    }
}
