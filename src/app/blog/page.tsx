import Link from 'next/link'
import { PageWrapper } from '~/components/PageWrapper'

export default function Page() {
  return (
    <PageWrapper>
      <h3>Blog</h3>
      <ul>
        <li>
          <Link href="/blog/coding-bootcamps-student">
            - Coding Bootcamps Student
          </Link>
        </li>
        <li>
          <Link href="/blog/animate-bootstrap-menu-icon-to-x">
            - Animate Bootstrap 3 Menu Icon To (X)
          </Link>
        </li>
      </ul>
      <br />
    </PageWrapper>
  )
}
