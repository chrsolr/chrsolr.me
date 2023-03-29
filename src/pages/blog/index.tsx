/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import { PageWrapper } from '~/components/PageWrapper'
import { Typography } from '~/components/Typography'
import { api } from '~/utils/api'
import { getUniqueKey } from '~/utils/helpers'

export default function Blog() {
  const { data: blogPosts } = api.blogPosts.getAll.useQuery()

  return (
    <>
      <Head>
        <title>chrsolr.me - blog</title>
      </Head>
      <PageWrapper className="pb-8">
        {blogPosts?.map((post) => (
          <div key={getUniqueKey()} className="mb-8">
            <div className="w-fit">
              <Link href={`/blog/${post.slug}`}>
                <img
                  src={post.coverImageUrl}
                  alt={''}
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
    </>
  )
}
