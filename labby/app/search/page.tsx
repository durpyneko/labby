import type { Metadata } from "next"

import Search from "@/components/search"

export const metadata: Metadata = {
  title: "Labby: Search",
}

export default async function Page() {
  // Search is a Client Component ("use client"), but Next.js requires
  // metadata exports to live in Server Components — so they're split here.
  return <Search />
}
