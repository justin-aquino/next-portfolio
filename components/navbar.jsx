//built in link for server side rendering optimization and SEO from next
import Link from "next/link"

const navbar = () => {
  return (
    <div>
        <nav>
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
        </nav>
    </div>
  )
}

export default navbar