import {type} from "os"

interface Project {
  isFeatured: boolean
  thumbnail: string
  title: string
  description: string
  slug: string
  tags: string[]
  links: Link[]
  githubLink: string
  externalLink: string
  projectDetails: ProjectStructure
  case: boolean
}

type Link = {
  name: string
  url: string
  type: LinkType
}

type LinkType = "github" | "external"
