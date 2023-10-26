import Link from 'next/link'
import { PageWrapper } from '~/components/PageWrapper'

export default function Page() {
  return (
    <PageWrapper>
      <h3>Blog</h3>
      <Link href="/blog/binary-clock">Binary Clock</Link>
    </PageWrapper>
  )
}
