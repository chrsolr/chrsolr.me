import React, { useContext } from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import Typography from '../shared/components/Typography'
import Image from '../shared/components/Image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LayoutContext } from '../contexts/LayoutContextProvider'
import { getTheme } from '../theme'
import resumeData from '../data/resume'

const ContentWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
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
    <ContentWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image src={avatarUrl} isRounded style={{ margin: 0 }} />
        <div style={{ display: 'flex' }}>
          <Typography size="xxl">christian</Typography>
          <Typography weight="semibold" size="xxl" color={accent}>
            soler
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
      </div>

      {Boolean(resumeData.aboutMe.length) &&
        resumeData.aboutMe.map((about) => (
          <Typography style={{ textIndent: '2rem' }}>{about}</Typography>
        ))}

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {Boolean(resumeData.jobs.length) &&
          resumeData.jobs.map((job) => (
            <div style={{ marginRight: '1rem' }}>
              <Typography weight="semibold">
                {job.companyName} - ({job.title})
              </Typography>
              <Typography>
                <i>
                  {job.startDate}-{job.endDate}
                </i>
              </Typography>
              <Typography>
                Technologies: {job.technologies.join(', ')}
              </Typography>
              <ul>
                {job.responsibilities.map((responsibility) => (
                  <li>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </ContentWrapper>
  )
}
