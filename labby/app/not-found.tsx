// app/not-found.tsx
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="m-4 flex flex-col items-center">
      <Image
        className="m-4 w-100"
        src="/cat-puter.png"
        width={512}
        height={512}
        alt="cat fixing a computer meme"
      ></Image>
      <span className="text-3xl">404 Not Found</span>
      <span className="mb-4">Could not find requested resource</span>
      <span>if you know where to find it, please let me know</span>
      <Link href="/" className="text-ring">
        [Return Home]
      </Link>
    </div>
  )
}
