export type UserDTO = {
  id: string
  username: string
  email: string
  profileImageUrl: string
  createdAt: Date
  updatedAt: Date
  blogPosts: BlogPostDTO[]
  socials: SocialDTO[]
}

export type BlogPostDTO = {
  id: string
  authorId: string
  title: string
  summary: string
  slug: string
  coverImageUrl: string
  markdown: string
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export type SocialDTO = {
  url: string
  fontAwesomeIconName: string
}
