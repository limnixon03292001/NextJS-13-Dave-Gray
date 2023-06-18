import { NextResponse } from "next/server"

type Feedback = { 
    name?: string,
    email?: string,
    message?: string
}

export async function POST(request: Request) {
    //in express you will use request.body but here in NEXTJS SERVER YOU WILL USE request.json() instead.
    const data: Feedback = await request.json()
    console.log('data: ', data)

    const { name, email, message } = data

    return NextResponse.json({ name, email, message })
}