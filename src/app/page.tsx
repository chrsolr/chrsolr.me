import { Editor } from '@/components/Editor'
import { Typography } from '@/components/Typography'
import Link from 'next/link'

const HomeForMobile = () => {
  return (
    <>
      <div
        className="container flex flex-col items-center justify-center"
        style={{ display: 'flex' }}>
        <Typography as="h1">
          <Typography as="span" className="text-accent-yellow">
            christian
          </Typography>
          <Typography as="span" className="text-accent-blue">
            soler
          </Typography>
        </Typography>
      </div>
      <Link className="text-accent-pink" href="https://github.com/chrsolr/">
        <Typography as="h3">github</Typography>
      </Link>
    </>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col">
      <Editor />
    </main>
  )
}
