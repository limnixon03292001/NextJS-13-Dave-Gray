import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About page',
  description: 'First try using NextJS 13 by Nixon!'
}

export default function About() {
  // throw new Error('Not Today')
  return (
    <>
        <h1>About</h1>
        <Link href="/">Link to Homepage</Link>
    </>
    
  )
}
