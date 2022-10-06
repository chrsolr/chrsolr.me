import React from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import Typography from '../shared/components/Typography'
import Image from '../shared/components/Image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SocialIconsWrapper = styled.div`
  display: flex;
  a {
    margin: 1rem
  }
`

export default function Resume() {
  const avatarUrl = 'https://media-exp1.licdn.com/dms/image/C5603AQGKKZ_eir17GA/profile-displayphoto-shrink_200_200/0/1516804819724?e=1670457600&v=beta&t=DT2Sp8KTwT_uAHQ9l89ZojXUbsxKS_vyk6aaoqNQwLU'
  return (
    <PageWrapper>
      <ContentWrapper>
        <Image src={avatarUrl} isRounded />
        <SocialIconsWrapper>
          <a href='https://github.com/chrsolr' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
          <a href='https://www.linkedin.com/in/christiansoler/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
        </SocialIconsWrapper>
      </ContentWrapper>


      <Typography>
        As a passionate person, I pride myself on every project I take on. I am
        self-motivated and driven by puzzles and challenges. As a developer, I
        enjoy working in a team environment. In addition, I thrive under
        pressure when working on multiple projects.
      </Typography>
      <Typography>
        I am an experienced Full Stack Web Developer, as well as a Mobile
        Developer Hobbyist. I am looking for an opportunity to work in a company
        with a great environment, where I can expand my knowledge and help a
        company with my experience. As well as becoming part of a team that is
        as passionate about programming as I am.
      </Typography>

      <Typography>
        JavaScript, AngularJS, C#, JAVA, MeteorJS, Kubernetes, Docker,
        RequireJs, NodeJS, JQuery, TypeScript, Entity Framework, ASP.NET, JSON,
        HTTP, Android, Bootstrap, LESS/SASS, LINQ, Github, TFS, Bitbucket.
      </Typography>
    </PageWrapper>
  )
}
