'use client'

import {
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { PageWrapper } from '~/components/PageWrapper'
import { Typography } from '~/components/Typography'
import { getUniqueKey } from '~/utils/helpers'
import CIcon from '@coreui/icons-react'
import {
  cibCodepen,
  cibCodesandbox,
  cibGithub,
  cibLeetcode,
  cibLinkedin,
  cibTwitch,
  cibYoutube,
} from '@coreui/icons'

export default function Page() {
  const socials = [
    {
      url: 'https://github.com/chrsolr/',
      icon: cibGithub,
      name: 'Github',
    },
    {
      url: 'https://codesandbox.io/u/chrsolr',
      icon: cibCodesandbox,
      name: 'CodeSandbox',
    },
    {
      url: 'https://codepen.io/chrsolr',
      icon: cibCodepen,
      name: 'Codepen',
    },
    {
      url: 'https://www.linkedin.com/in/christiansoler/',
      icon: cibLinkedin,
      name: 'LinkedIn',
    },
    {
      url: 'https://leetcode.com/chrsolr/',
      icon: cibLeetcode,
      name: 'Leetcode',
    },
  ]

  return (
    <PageWrapper className="h-[calc(100vh-28vh)]" disableContainer>
      <div className="container mx-auto flex flex-1 select-none flex-col items-center justify-center">
        <Typography size="9xl" className="m-0 mb-2 text-accent">
          chrsolr
        </Typography>

        <div className="flex flex-wrap justify-center">
          {socials.map((social) => (
            <>
              <Link
                title={social.name}
                key={getUniqueKey()}
                href={social.url}
                target="_blank"
                className="flex items-center hover:text-accent"
              >
                <CIcon icon={social.icon} className="mr-2 h-3 w-3" />
                {social.name}
              </Link>
              <span className="mx-2 last:hidden"> - </span>
            </>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
