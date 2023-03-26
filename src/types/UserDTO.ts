export type UserDTO = {
  id: string
  username: string
  email: string
  profileImageUrl: string
  createdAt: Date
  updatedAt: Date
  blogPosts: BlogPost[]
  socials: Social[]
  isLoaded: boolean
  isSignedIn: boolean
  user: unknown
}

export type BlogPost = {
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

export type Social = {
  url: string
  fontAwesomeIconName: string
}
