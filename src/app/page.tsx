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

export default function Page() {
  const socials = [
    {
      url: 'https://github.com/chrsolr/',
      icon: faGithub,
      name: 'Github',
    },
    {
      url: 'https://codesandbox.io/u/chrsolr',
      icon: faSquare,
      name: 'CodeSandbox',
    },
    {
      url: 'https://codepen.io/chrsolr',
      icon: faCodepen,
      name: 'Codepen',
    },
    {
      url: 'https://www.linkedin.com/in/christiansoler/',
      icon: faLinkedin,
      name: 'LinkedIn',
    },
    {
      url: 'https://www.youtube.com/@chrsolr',
      icon: faYoutube,
      name: 'YouTube',
    },
    {
      url: 'https://www.twitch.tv/chrsolr/',
      icon: faTwitch,
      name: 'Twitch',
    },
  ]

  return (
    <PageWrapper className="h-[calc(100vh-28vh)]" disableContainer>
      <div className="container mx-auto flex flex-1 select-none flex-col items-center justify-center">
        <Typography size="9xl" className="text-accent">
          chrsolr
        </Typography>

        <div className="flex  flex-wrap">
          {socials.map((social) => (
            <>
              <Link
                title={social.name}
                key={getUniqueKey()}
                href={social.url}
                target="_blank"
                className="hover:text-accent"
              >
                <FontAwesomeIcon className="mr-2" icon={social.icon} />
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
