import blogItems from '../data/blog.json'

export type BlogItemDetails = {
  title: string
  summary: string
  imageUrl: string
  slug: string
  active: boolean
  markdown: string
}

export type BlogItemSummary = Omit<BlogItemDetails, 'markdown'>

function getBlogs(): BlogItemDetails[] {
  return blogItems || []
}

export function getBlogSummaries(): BlogItemSummary[] {
  return getBlogs()
    .filter((item) => item.active)
    .map(({ title, summary, slug, imageUrl, active }) => ({
      title,
      summary,
      slug,
      imageUrl,
      active,
    })) as BlogItemSummary[]
}

export function getBlogBySlug(slug: string): BlogItemDetails | undefined {
  return getBlogs().find((element) => element.slug === slug)
}
