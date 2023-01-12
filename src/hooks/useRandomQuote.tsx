import { useEffect, useState } from 'react'
import { Props as QuoteProps } from '../shared/components/Quote'

type HookProps = {
    quote?: QuoteProps
    getQuote: () => void
    URL: string
}

export default function useRandomQuote(): HookProps {
    const URL = 'https://api.quotable.io/random'
    const [quote, setQuote] = useState<QuoteProps>()

    const getQuote = async () => {
        try {
            const response = await (await fetch(URL as string)).json()
            setQuote(response)
        } catch (error) {
            throw new Error('Error: Fetching Quote')
        }
    }

    useEffect(() => {
        if (!quote) {
            ;(async () => await getQuote())()
        }
    }, [quote])

    return {quote, getQuote, URL}
}