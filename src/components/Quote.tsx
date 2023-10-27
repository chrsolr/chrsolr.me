'use client'

import { useEffect, useState } from 'react'
import { getUniqueKey } from './../utils/helpers'
import { Typography } from './Typography'
import { useInterval } from '~/hooks/useInterval'

type QuoteProps = {
  content: string
  author: string
  tags: string[]
  authorSlug: string
  permalink: string
}

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

export const Quote = () => {
  const { quote, getQuote } = useRandomQuote()

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  useInterval(() => getQuote(), 10000)

  if (!quote) {
    return <>$...</>
  }

  return (
    <div className="flex flex-col items-center">
      <Typography
        size="5xl"
        className="text-center sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
      >
        {quote.author}
      </Typography>

      <Typography
        size="base"
        weight="light"
        className="text-center md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl"
      >
        {quote.content}
      </Typography>

      <div className="mb-4 h-1.5 min-w-full overflow-hidden rounded-full bg-accent" />

      <div className="flex">
        {quote.tags?.map((tag) => (
          <div
            key={getUniqueKey()}
            className={`mr-4 overflow-hidden rounded-full bg-accent px-4 py-1 text-primary-light last:mr-0`}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}
