import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import ProgressBar from './ProgressBar'

export interface Props {
  author: string
  id: number
  quote: string
  permalink: string
}

const StyledWrapper = styled.div`
  @media ${(props) => props.theme.deviceSizes.xs} {
    p:nth-child(1) {
      font-size: 2rem;
    }

    p:nth-child(2) {
      font-size: 1rem;
    }
  }
  @media ${(props) => props.theme.deviceSizes.sm} {
    p:nth-child(1) {
      font-size: 3rem;
    }

    p:nth-child(2) {
      font-size: 1.25rem;
    }
  }

  @media ${(props) => props.theme.deviceSizes.md} {
    p:nth-child(1) {
      font-size: 5rem;
    }

    p:nth-child(2) {
      font-size: 1.5rem;
    }
  }

  @media ${(props) => props.theme.deviceSizes.xl} {
    p:nth-child(1) {
      font-size: 7rem;
    }

    p:nth-child(2) {
      font-size: 2rem;
    }
  }
`

const StyledAuthor = styled.p`
  font-size: 7rem;
  font-weight: ${(props) => props.theme.typography.fontWeigths.thin};
  text-align: center;
`

const StyledQuote = styled.p`
  font-size: 1.7rem;
  font-weight: ${(props) => props.theme.typography.fontWeigths.thin};
  text-align: center;
  margin-bottom: 1rem;
`

const StyledPermalink = styled.a`
  text-align: center;
  display: block;
`

function Quote({ author, id, quote, permalink }: Props) {
  return (
    <StyledWrapper>
      <StyledAuthor>{author}</StyledAuthor>
      <StyledQuote>{quote}</StyledQuote>
      <ProgressBar progress={65} />
      <StyledPermalink href={permalink} target="_blank" rel="noreferrer">
        - source
      </StyledPermalink>
    </StyledWrapper>
  )
}

export default Quote
