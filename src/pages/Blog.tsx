import React from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import { BlogItemSummary, getBlogSummaries } from '../services/blogServices'
import { Link } from 'react-router-dom'
import Image from '../shared/components/Image'
import Typography, { FontSizes } from '../shared/components/Typography'
import styled from 'styled-components'

interface BlogItemProps {
  item: BlogItemSummary
}

const Wrapper = styled.div`
  margin-bottom: 2rem;
`

const StyledLink = styled.div<{ size: FontSizes }>`
  margin-bottom: 1rem;

  a {
    font-size: ${(props) => props.theme.typography.fontSizes[props.size]};
  }
`

function BlogItem({ item }: BlogItemProps) {
  return (
    <Wrapper>
      <Link to={`/blog/${item.slug}`}>
        <Image isResponsive src={item.imageUrl} />
      </Link>
      <StyledLink size="xxl">
        <Link to={`/blog/${item.slug}`}>{item.title}</Link>
      </StyledLink>
      <Typography>{item.summary}</Typography>
      <StyledLink size="md">
        <Link to={`/blog/${item.slug}`}>read more...</Link>
      </StyledLink>
    </Wrapper>
  )
}

export default function Blog() {
  const items = getBlogSummaries()
  return (
    <PageWrapper>
      <div>
        {items.map((item, index) => (
          <BlogItem key={index.toString()} item={item} />
        ))}
      </div>
    </PageWrapper>
  )
}
