import React, { useContext } from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import Typography from '../shared/components/Typography'
import Image from '../shared/components/Image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resumeData from '../data/resume'
import { LayoutContext } from '../contexts/LayoutContextProvider'
import { getTheme } from '../theme'

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
  const { theme } = useContext(LayoutContext)
  const { accent } = getTheme(theme).colors
  const avatarUrl = resumeData.profileImageUrl
  return (
    <PageWrapper>
      <ContentWrapper>
        <Image src={avatarUrl} isRounded />
        <div style={{ display: 'flex', textTransform: 'uppercase' }}>
          <Typography weight="thin" size="xxl">
            Christian
          </Typography>
          <Typography weight="semibold" size="xxl" color={accent}>
            Soler
          </Typography>
        </div>
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
