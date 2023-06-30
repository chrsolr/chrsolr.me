import { type NextPage } from 'next'
import Head from 'next/head'
import { PageWrapper } from '~/components/PageWrapper'
import { Quote } from '~/components/Quote'
import { useInterval } from '~/hooks/useInterval'
import { useRandomQuote } from '~/hooks/useRandomQuote'

const Home: NextPage = () => {
  const { quote, URL, getQuote } = useRandomQuote()
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  useInterval(() => getQuote(), 10000)

  return (
    <>
      <Head>
        <title>chrsolr.me - home</title>
      </Head>
      <PageWrapper disableContainer>
        {quote && (
          <div className="container mx-auto flex flex-1 flex-col justify-center">
            <Quote
              content={quote.content}
              author={quote.author}
              tags={quote.tags}
              authorSlug={quote.authorSlug}
              permalink={URL}
            />
          </div>
        )}
      </PageWrapper>
    </>
  )
}

export default Home
