import Link from 'next/link'
import { getBlogPosts } from '~/apis/blog'
import { PageWrapper } from '~/components/PageWrapper'
import { Typography } from '~/components/Typography'
import { getUniqueKey } from '~/utils/helpers'

export default async function Page() {
  const posts = await getBlogPosts()

  return (
    <PageWrapper>
      {posts?.map((post) => (
        <div key={getUniqueKey()} className="mb-8">
          <div className="w-fit">
            <Link href={`/blog/${post.slug}`}>
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img
                src={post.coverImageUrl || ''}
                alt={post.title}
                className="w-screen rounded-2xl"
              />
            </Link>
          </div>

          <Link href={`/blog/${post.slug}`} className="text-accent">
            <Typography size="4xl" className="my-8">
              {post.title}
            </Typography>
          </Link>

          <Typography>{post.summary}</Typography>

          <Link href={`/blog/${post.slug}`} className="text-accent">
            <Typography>read more...</Typography>
          </Link>
        </div>
      ))}
    </PageWrapper>
  )
}
