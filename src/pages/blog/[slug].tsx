'use client'

import { type GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { type CodeProps } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeRaw from 'rehype-raw'
import { PageWrapper } from '~/components/PageWrapper'
import { api } from '~/utils/api'

export function getServerSideProps({ params }: GetServerSidePropsContext) {
  return { props: { slug: params?.slug } }
}

export default function BlogPostDetails({ slug }: { slug: string }) {
  const { data: blog } = api.blogPosts.getBySlug.useQuery({ slug })

  return (
    <>
      <Head>
        <title>chrsolr.me - {blog?.title}</title>
      </Head>
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
          {blog?.markdown && (
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              // eslint-disable-next-line react/no-children-prop
              children={blog?.markdown}
              components={{
                code({
                  node,
                  inline,
                  className,
                  children,
                  ...props
                }: CodeProps) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
                      style={a11yDark as any}
                      showLineNumbers
                      // eslint-disable-next-line react/no-children-prop
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            />
          )}
        </div>
      </PageWrapper>
    </>
  )
}
