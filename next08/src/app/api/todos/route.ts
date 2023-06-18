import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

const API_KEY: string = process.env.DATA_API_KEY as string

//GET DATA
export async function GET(respone: Response) {
    const res = await fetch(DATA_SOURCE_URL)

    const todos: Todo[] = await res.json()

    return NextResponse.json({data: todos})
} 

//DELETE DATA
export async function DELETE(request: Request) {
    const { id }: Partial<Todo> = await request.json()

    if(!id) return NextResponse.json({ 'message': 'Todo id required'})

    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        }
    })

    return NextResponse.json({ "message": `Todo ${id} has been deleted` })
}


//ADD DATA
export async function POST(request: Request) {
    const { userId, title }: Partial<Todo> = await request.json()

    if(!userId || !title) return NextResponse.json({ 'message': 'Missing required data!'})

    const res = await fetch(`${DATA_SOURCE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({
            userId, title, completed: false,
        })
    })

    const newTodo: Todo = await res.json()

    return NextResponse.json( newTodo )
}

//UPDATE SPECIFIC DATA
export async function PUT(request: Request) {
    const { userId, id, completed, title }: Todo = await request.json()

    if(!userId || !title || !id || typeof(completed) !== 'boolean') return NextResponse.json({ 'message': 'Missing required data!'})

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({
            userId, title, completed,
        })
    })

    const updatedTodo: Todo = await res.json()

    return NextResponse.json( updatedTodo )
}