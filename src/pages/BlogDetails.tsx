import React from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { getBlogBySlug } from '../services/blogServices'
import styled from 'styled-components'

const Wrapper = styled(PageWrapper)`
  img {
    width: 100%;
    border-radius: ${(props) => props.theme.dimensions.borderRadius};
  }

  pre > div {
    border-radius: ${(props) => props.theme.dimensions.borderRadius};
  }
`

export default function BlogDetails() {
  const params = useParams() as { slug: string }
  const blog = getBlogBySlug(params.slug)

  return (
    <Wrapper>
      {blog?.markdown && (
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={blog?.markdown}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  showLineNumbers
                  children={String(children).replace(/\n$/, '')}
                  // @ts-ignore
                  style={a11yDark}
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
    </Wrapper>
  )
}
