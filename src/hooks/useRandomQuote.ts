import { useEffect, useState } from 'react'
import { type QuoteProps } from '~/components/Quote'

type HookReturnValue = {
  quote?: QuoteProps
  getQuote: () => Promise<void>
  URL: string
}

export const useRandomQuote = (): HookReturnValue => {
  const URL = 'https://api.quotable.io/random'
  const [quote, setQuote] = useState<QuoteProps>()

  const getQuote = async () => {
    try {
      const response = (await (await fetch(URL as string)).json()) as QuoteProps
      setQuote(response)
    } catch (error) {
      throw new Error('Error: Fetching Quote')
    }
  }

  useEffect(() => {
    if (!quote) {
      void (async () => getQuote())()
    }
  }, [quote])

  return { quote, getQuote, URL }
}
