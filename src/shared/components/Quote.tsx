import React from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
import Typography from './Typography'

export interface Props {
  author: string
  content: string
  onClick?: () => void
}

const StyledWrapper = styled.div`
  user-select: none;
  text-align: center;

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

const StyledAuthor = styled(Typography)<{ onClick?: () => void }>`
  font-size: 7rem;
  font-weight: ${(props) => props.theme.typography.fontWeights.light};
  margin-bottom: 0;

  &:hover {
    cursor: pointer;
  }
`

const StyledQuote = styled(Typography)<{ onClick?: () => void }>`
  font-size: 1.7rem;
  font-weight: ${(props) => props.theme.typography.fontWeights.light};
  margin: 0;

  &:hover {
    cursor: pointer;
  }
`

const StyledPermalink = styled.a`
  display: block;
  font-size: ${(props) => props.theme.typography.fontSizes.md};
`

export default function Quote({ author, content, onClick }: Props) {
  return (
    <StyledWrapper>
      <StyledAuthor onClick={onClick}>{author}</StyledAuthor>
      <StyledQuote onClick={onClick}>{content}</StyledQuote>
      <ProgressBar progress={65} />
      <StyledPermalink
        href={process.env.REACT_APP_QUOTE_URL}
        target="_blank"
        rel="noreferrer"
      >
        - source
      </StyledPermalink>
    </StyledWrapper>
  )
}
