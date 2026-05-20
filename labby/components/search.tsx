"use client"

// Libs
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Fuse from "fuse.js"

// Comps
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Icons
import {
  Edit,
  Eye,
  HelpCircle,
  Loader2,
  MailIcon,
  Skull,
  User2,
} from "lucide-react"

interface User {
  id: number
  name: string
  email: string
  role: string
}

export default function Search() {
  const [data, setData] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3001/data/set") // ! replace with prod endpoint
        const result: User[] = await res.json()
        setData(result)
      } catch (error) {
        console.error("Fetch failed:", error)
      }
    }
    fetchData()
  }, [])

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data

    const fuse = new Fuse(data, {
      keys: ["name", "email", "role"],
      threshold: 0.3,
    })

    return fuse.search(searchTerm).map((result) => result.item)
  }, [data, searchTerm])

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-row justify-center">
        <ButtonGroup className="w-full p-2 pt-4 lg:w-1/2">
          <Input
            id="input-button-group"
            placeholder="Search for Name, Surname, Email, Role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline">Search</Button>
        </ButtonGroup>
      </div>

      {/* TODO dynamic rendering of off-screen components on larger data sets */}
      {filteredData.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {filteredData.map((user) => (
            <div
              key={user.id}
              className="flex min-w-70 flex-col gap-2 rounded-md bg-card p-2 hover:cursor-pointer hover:gap-1 hover:border hover:border-accent-foreground/25 hover:bg-accent"
            >
              <div className="flex justify-between">
                <span className="flex flex-row gap-2">
                  <User2 /> {user.name}
                </span>
                <span className="flex flex-row gap-2">
                  {user.role === "Admin" ? (
                    <Badge variant="destructive">
                      <Skull data-icon="inline-start" />
                      {user.role}
                    </Badge>
                  ) : user.role === "User" ? (
                    <Badge variant="default">
                      <User2 data-icon="inline-start" />
                      {user.role}
                    </Badge>
                  ) : user.role === "Viewer" ? (
                    <Badge variant="secondary">
                      <Eye data-icon="inline-start" />
                      {user.role}
                    </Badge>
                  ) : user.role === "Editor" ? (
                    <Badge variant="secondary">
                      <Edit data-icon="inline-start" />
                      {user.role}
                    </Badge>
                  ) : (
                    <Badge variant="outline">
                      <HelpCircle data-icon="inline-start" />
                      Unknown
                    </Badge>
                  )}
                </span>
              </div>
              <span className="flex flex-row gap-2">
                <MailIcon /> {user.email}
              </span>
            </div>
          ))}
        </div>
      ) : data.length > 0 ? (
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <Image
            width={200}
            height={200}
            src="/cat-hide.jpg"
            alt="no results"
            className="w-100 opacity-60"
          />
          <span className="flex max-w-screen items-center p-2 text-center text-2xl md:max-w-300">
            A valueble search was made, but we couldn&apos;t find what you are
            looking for. Would you please try again?
          </span>
        </div>
      ) : (
        <Loader2 className="animate-spin" />
      )}
    </div>
  )
}
