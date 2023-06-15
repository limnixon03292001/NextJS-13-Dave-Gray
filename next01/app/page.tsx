import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next app',
  description: 'First try using NextJS 13 by Nixon!'
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/about">Go to About Page</Link>
    </main>
  )
}
