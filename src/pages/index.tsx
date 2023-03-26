import { type NextPage } from 'next'
import Head from 'next/head'
import { PageWrapper } from '~/components/PageWrapper'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>chrsolr.me - home</title>
      </Head>
      <PageWrapper>
        <h1 className="bg-red-600 text-center">HOME PAGE CONTENT</h1>
      </PageWrapper>
    </>
  )
}

export default Home
