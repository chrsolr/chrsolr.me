import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

export interface Props {
  author: string
  id: number
  quote: string
  permalink: string
}

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

const StyledPeermalink = styled.a``

const StyledProgressBar = styled.div<{ progress: number }>`
  background-color: ${(props) => darken(0.2, props.theme.colors.accent)};
  border-radius: 0.3125rem;
  width: 100%;
  height: 0.3rem;
  margin-bottom: 1rem;
  overflow: hidden;

  div {
    border-radius: 0.3125rem;
    background-color: ${(props) => props.theme.colors.accent};
    text-align: center;
    height: inherit;
    transition: 0.3s;
    width: ${(props) => props.progress}%;
  }
`

function ProgressBar({ progress }: { progress: number }) {
  return (
    <StyledProgressBar progress={progress}>
      <div></div>
    </StyledProgressBar>
  )
}

function Quote({ author, id, quote, permalink }: Props) {
  return (
    <>
      <StyledAuthor>{author}</StyledAuthor>
      <StyledQuote>{quote}</StyledQuote>
      <ProgressBar progress={65} />
      <StyledPeermalink href={permalink} target="_blank" rel="noreferrer">
        - source
      </StyledPeermalink>
    </>
  )
}

export default Quote
