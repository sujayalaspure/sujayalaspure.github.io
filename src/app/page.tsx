import RightSidebar from "@/components/RightSidebar"
import {IconContext} from "react-icons"

import Image from "next/image"
import Link from "next/link"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-navy">
      <RightSidebar />
      {/* Content Container */}
      <div className="flex-1">
        <Hero />
      </div>
    </main>
  )
}
