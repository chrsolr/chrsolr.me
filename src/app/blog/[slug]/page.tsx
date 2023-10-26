import { getBlogBySlug } from '~/apis/blog'
import { PageWrapper } from '~/components/PageWrapper'

type Params = {
  params: {
    slug: string
  }
}

export default async function BlogPostDetails({ params: { slug } }: Params) {
  const markdown = await getBlogBySlug(slug)

  return (
    <PageWrapper>
      <div
        className="prose my-8 max-w-none pb-12 
        prose-h1:text-accent 
        prose-h3:text-accent 
        prose-h4:text-accent 
        prose-p:text-primary-dark 
        prose-a:text-accent 
        prose-pre:p-0 
        prose-ul:text-primary-dark 
        prose-img:w-full
        prose-img:rounded-2xl 
        dark:prose-p:text-primary-light
        dark:prose-strong:text-primary-light
        dark:prose-pre:bg-primary-dark
        dark:prose-ol:text-primary-light
        dark:prose-ul:text-primary-light"
      >
        {markdown}
      </div>
    </PageWrapper>
  )
}
