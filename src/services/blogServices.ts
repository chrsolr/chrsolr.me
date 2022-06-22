import blogItems from '../data/blog.json'

export type BlogItemSummary = {
  title: string
  summary: string
  imageUrl: string
  slug: string
}

export type BlogItemDetails = BlogItemSummary & {
  markdown: string
}

export function getBlogs(): BlogItemDetails[] {
  return blogItems || []
}

export function getBlogSummaries(): BlogItemSummary[] {
  return getBlogs().map(({ title, summary, slug, imageUrl }) => ({
    title,
    summary,
    slug,
    imageUrl,
  })) as BlogItemSummary[]
}

export function getBlogBySlug(slug: string): BlogItemDetails | undefined {
  return getBlogs().find((element) => element.slug === slug)
}
