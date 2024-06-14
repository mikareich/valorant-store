import Navbar from "@/components/NavBar"
import { Heading2, Link, TextLarge } from "@/components/Typography"

export default function NotFound() {
  return (
    <div className="container">
      <Navbar />
      <main className="mt-20 space-y-5 text-center">
        <Heading2>404 - Page Not Found</Heading2>
        <TextLarge>
          Sorry, the page you are looking for does not exist. Do you want to
          check out the <Link href="/">homepage</Link>?
        </TextLarge>
      </main>
    </div>
  )
}
