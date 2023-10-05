import {Logo, socialLink} from "@/utils/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {}

export default function RightSidebar({}: Props) {
  return (
    <div className="flex-col bg-lightnavy border-r border-darkslate sticky w-20 py-4 flex">
      <div className="justify-center flex items-center">
        <Image src={Logo} alt="Profile" width={50} height={50} className="rounded-md" />
      </div>
      <div className=" flex-1 flex-col justify-center flex">
        {socialLink.map((item, index) => (
          <SocialItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

type SocialItemProps = {
  Icon: React.ReactNode
  link: string
  color: string
  name: string
}
const SocialItem = ({Icon, link}: SocialItemProps) => {
  return (
    <div className="flex justify-center aspect-square items-center cursor-pointer hover:pointer">
      <Link href={link} target="_blank">
        <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">{Icon}</span>
      </Link>
    </div>
  )
}
