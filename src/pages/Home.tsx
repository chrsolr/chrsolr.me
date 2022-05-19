import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../shared/components/PageWrapper'
import Quote from '../shared/components/Quote'
import useRandomQuote from './../hooks/useRandomQuote'

const Wrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 1rem;
`

function Home() {
  const { quote, getQuote } = useRandomQuote()
  return (
    <Wrapper>
      {quote && (
        <Quote
          id={quote.id}
          author={quote.author}
          quote={quote.quote}
          permalink={quote.permalink}
          onClick={getQuote}
        />
      )}
    </Wrapper>
  )
}

export default Home
