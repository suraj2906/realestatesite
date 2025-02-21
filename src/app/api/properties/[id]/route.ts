import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Property from "@/models/Property";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    
    await dbConnect()
    const id = (await params).id
    const property = await Property.findById(id)

    if (!property) {
      return NextResponse.json(
        { message: 'Property not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(property)
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 