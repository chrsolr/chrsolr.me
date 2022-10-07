import React from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import Typography from '../shared/components/Typography'
import Image from '../shared/components/Image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resumeData from '../data/resume'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SocialIconsWrapper = styled.div`
  display: flex;

  a {
    margin: 1rem;
  }
`

export default function Resume() {
  const avatarUrl = resumeData.profileImageUrl
  return (
    <PageWrapper>
      <ContentWrapper>
        <Image src={avatarUrl} isRounded />
        <SocialIconsWrapper>
          {Boolean(resumeData.socials.length) &&
            resumeData.socials.map((social) => (
              <a href={social.url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
        </SocialIconsWrapper>
        {Boolean(resumeData.aboutMe.length) &&
          resumeData.aboutMe.map((about) => <Typography>{about}</Typography>)}

        {Boolean(resumeData.skills.length) &&
          resumeData.skills.map((skill) => <Typography>{skill}</Typography>)}
      </ContentWrapper>
    </PageWrapper>
  )
}
