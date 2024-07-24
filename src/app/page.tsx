import { Typography } from '@/components/Typography'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex container min-h-screen items-center justify-center min-w-full flex-col">
      <Typography as="h1">
        <Typography as="span" className="text-accent-yellow">
          christian
        </Typography>
        <Typography as="span" className="text-accent-blue">
          soler
        </Typography>
      </Typography>
      <Link className="text-accent-pink" href="https://github.com/chrsolr/">
        <Typography as="h3">github</Typography>
      </Link>
    </main>
  )
}
