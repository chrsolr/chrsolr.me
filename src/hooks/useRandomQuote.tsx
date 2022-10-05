import { useEffect, useState } from 'react'
import { Props as QuoteProps } from '../shared/components/Quote'

interface HookProps {
  quote?: QuoteProps
  getQuote: () => void
}

export default function useRandomQuote(): HookProps {
  const URL = process.env.REACT_APP_QUOTE_URL
  const [quote, setQuote] = useState<QuoteProps>()

  const getQuote = async () => {
    try {
      const response = await (await fetch(URL)).json()
      setQuote(response)
    } catch (error) {
      throw new Error('Error: Fetching Quote')
    }
  }

  useEffect(() => {
    if (!quote) {
      ;(async () => await getQuote())()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quote])

  return { quote, getQuote }
}