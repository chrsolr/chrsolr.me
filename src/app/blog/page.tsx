import Link from 'next/link'
import { getBlogPosts } from '~/apis/blog'
import { PageWrapper } from '~/components/PageWrapper'
import { Typography } from '~/components/Typography'
import { getUniqueKey } from '~/utils/helpers'
import Title from '~/components/Title'

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
                className="mb-6 w-screen rounded-2xl"
              />
            </Link>
          </div>

          <Link href={`/blog/${post.slug}`} className="text-accent">
            <Title className="mb-2">{post.title}</Title>
          </Link>

          <Typography size="sm" className="lowercase text-gray-500">
            <em>
              {post.author} - {post.date}
            </em>
          </Typography>

          <Typography>{post.summary}</Typography>

          <Link href={`/blog/${post.slug}`} className="text-accent">
            read more...
          </Link>
        </div>
      ))}
    </PageWrapper>
  )
}
