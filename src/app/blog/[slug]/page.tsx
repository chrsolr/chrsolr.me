import showdown from 'showdown'
import { getBlogBySlug, getBlogPosts } from '~/apis/blog'
import { PageWrapper } from '~/components/PageWrapper'

type Params = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map(({ slug }) => ({
    slug,
  }))
}

export default async function BlogPostDetails({ params: { slug } }: Params) {
  const converter = new showdown.Converter()
  const { markdown } = await getBlogBySlug(slug)
  const htmlContent = converter.makeHtml(markdown)

  return (
    <PageWrapper>
      <div
        className="prose
        max-w-none
        prose-h1:m-0
        prose-h1:mb-6
        prose-h1:text-accent
        prose-h2:m-0
        prose-h2:mb-6
        prose-h2:text-accent
        prose-h3:m-0
        prose-h3:mb-6
        prose-h3:text-accent
        prose-h4:mb-0
        prose-h4:text-accent
        prose-h5:mb-0
        prose-h5:text-accent
        prose-h6:mb-0
        prose-p:m-0
        prose-p:mb-6
        prose-p:text-primary-dark
        prose-a:text-accent
        prose-pre:m-0
        prose-pre:mb-6
        prose-pre:px-4
        prose-pre:py-4
        prose-ol:mb-6
        prose-ul:text-primary-dark
        prose-img:m-0
        prose-img:w-full
        prose-img:rounded-2xl
        prose-hr:my-4
        dark:prose-p:text-primary-light
        dark:prose-strong:text-primary-light
        dark:prose-pre:bg-primary-dark
        dark:prose-ol:text-primary-light
        dark:prose-ul:text-primary-light
        "
      >
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </PageWrapper>
  )
}
