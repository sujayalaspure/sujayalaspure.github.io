interface ProjectStructure {
  metadata: ProjectMetadata
  content: ProjectContent[]
}

type ProjectMetadata = {
  isFeatured: boolean
  thumbnail: string
  title: string
  description: string
  slug: string
  tags?: string[]
  links?: Link[]
  isCaseStudy: boolean
}

type ProjectContent = {
  type: ContentType | string
  value: any
}

type ContentType = "bannerImage" | "tophead" | "brief" | "fullImage" | "usecaseScenarios" | "fullImage" | "splitshow"

type ContentValue = any
