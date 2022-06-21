import React from 'react'
import Typography, { FontSizes } from './Typography'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  item: BlogItemProps
}

export type BlogItemProps = {
  title: string
  summary: string
  imageUrl: string
  slug: string
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

const StyledImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`

export default function BlogItem({ item }: Props) {
  return (
    <Wrapper>
      <Link to={`/blog/${item.slug}`}>
        <StyledImage src={item.imageUrl} />
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
