import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../shared/components/PageWrapper'
import Quote from '../shared/components/Quote'
import useRandomQuote from './../hooks/useRandomQuote'
import { useInterval } from '../hooks/useInterval'

const Wrapper = styled(PageWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 1rem;
`

export default function Home() {
  const { quote, getQuote } = useRandomQuote()

  useInterval(() => getQuote(), 5000)

  return (
    <Wrapper>
      {quote && (
        <Quote
          author={quote.author}
          content={quote.content}
          progress={50}
          onClick={getQuote}
        />
      )}
    </Wrapper>
  )
}
