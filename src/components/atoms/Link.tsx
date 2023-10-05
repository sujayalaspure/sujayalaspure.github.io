import React from "react"
import NXTLink, {LinkProps} from "next/link"

interface Props extends LinkProps {
  children: React.ReactNode
  className?: string
}

export default function Link({children, href, className, ...rest}: Props) {
  return (
    <NXTLink
      href={href}
      {...rest}
      className={` py-4 px-10 border rounded-md border-accent bg-accent bg-opacity-10 hover:bg-opacity-20 ${className}`}
    >
      {children}
    </NXTLink>
  )
}
