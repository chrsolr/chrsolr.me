import { useEffect, useState } from 'react'
import { Props as QuoteProps } from '../shared/components/Quote'

function useRandomQuote(): QuoteProps | undefined {
  const URL = 'http://quotes.stormconsultancy.co.uk/random.json'
  const [quote, setQuote] = useState<QuoteProps>()

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await (await fetch(URL)).json()
        setQuote(response)
      } catch (error) {
        throw new Error('Error: Fetching Quote')
      }
    }

    if (!quote) {
      ;(async () => await fetcher())()
    }

    const fetchingInterval = setInterval(fetcher, 10000)

    return () => {
      clearInterval(fetchingInterval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return quote
}

export default useRandomQuote
