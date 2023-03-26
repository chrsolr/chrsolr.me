import { type NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>chrsolr.me - home</title>
      </Head>
      <main className="h-[calc(100vh-7rem)] w-full">
        <div className="container mx-auto">
          <h1 className="bg-red-600 text-center">HOME PAGE CONTENT</h1>
        </div>
      </main>
    </>
  )
}

export default Home
