import Welcome from "@/components/welcome"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Labby: Home",
}

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="mt-2">{/* Spacer */}</div>
      <Welcome name="John Doe" />
    </div>
  )
}
