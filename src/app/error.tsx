"use client"

import Navbar from "@/components/NavBar"
import { Heading2, Link, TextLarge } from "@/components/Typography"

export default function Error() {
  return (
    <div className="container">
      <Navbar />
      <main className="mt-20 space-y-5 text-center">
        <Heading2>500 - Server-side error occurred</Heading2>
        <TextLarge>
          Sorry, the server encountered an error. Please try again later. Do you
          want to check out the <Link href="/">homepage</Link>?
        </TextLarge>
      </main>
    </div>
  )
}
