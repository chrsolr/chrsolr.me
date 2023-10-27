import Link from 'next/link'
import { getBlogPosts } from '~/apis/blog'
import { PageWrapper } from '~/components/PageWrapper'

export default async function Page() {
  const posts = await getBlogPosts()

  return (
    <PageWrapper>
      <h3>Blog</h3>

      <hr />

      <ul>
        {Boolean(posts.length) &&
          posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                - {post.title} - {post.date}
              </Link>
            </li>
          ))}
      </ul>
    </PageWrapper>
  )
}
