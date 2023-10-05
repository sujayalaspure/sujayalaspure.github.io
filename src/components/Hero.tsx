import Link from "@/components/atoms/Link"
import ScrollingMouse from "@/components/atoms/ScrollingMouse"
import {ProfileLinks} from "@/utils/constants"
import React from "react"

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className="h-screen p-4 px-8 flex-col flex justify-center items-center">
      <div>
        <h3 className="text-accent text-sm font-roboto mb-4">Hello World, my name is</h3>
        <h1 className="text-sujay font-semibold text-lightestSlate">Sujay Alaspure</h1>
        <h2 className="text-slate text-subHeading font-semibold ">
          I build things that lives on{" "}
          <span className="magic">
            {/* <SparkleStar /> */}
            <span className="magic-text">Internet</span>
          </span>
        </h2>
        <div className="mt-8">
          <Link href={ProfileLinks.github}>Checkout my github!</Link>
        </div>
      </div>
      <ScrollingMouse />
    </div>
  )
}
