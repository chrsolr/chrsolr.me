import React from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import blogItems from '../config/blog.json'
import BlogItem, { BlogItemProps } from '../shared/components/BlogItem'

function BlogList({ items }: { items: BlogItemProps[] }) {
  return (
    <div>
      {items.map((item, index) => (
        <BlogItem key={index.toString()} item={item} />
      ))}
    </div>
  )
}

export default function Blog() {
  return (
    <PageWrapper>
      <BlogList items={blogItems} />
    </PageWrapper>
  )
}
