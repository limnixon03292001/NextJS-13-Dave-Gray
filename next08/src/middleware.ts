import { NextResponse } from "next/server"

const allowedOrigins = process.env.NODE_ENV === "production" ? 
["https://www.yoursite.com", "https://yoursite.com"] : 
["http://localhost:3000"]

export default function middleware(request: Request) {
    
    //connected to matcher
    // const regex = new RegExp('/api/*')

    // if(request.url.includes('/api/')) {

    // }

    // if(regex.test(request.url)) {

    // }

    const origin = request.headers.get('origin')
    console.log("origin", origin)

    // if we want to block api tool use this "|| !origin"
    if(origin && !allowedOrigins.includes(origin) ) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers: {
                "Content-Type": "text/plain"
            }
        })
    }


    console.log("Middleware fired!")
    console.log(request.method)
    console.log(request.url)


   

    return NextResponse.next()
}
 
//when using config.matcher this middleware function will only fires based on what we type on matcher property 
//Reference: https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {
    matcher: '/api/:path*',
}
