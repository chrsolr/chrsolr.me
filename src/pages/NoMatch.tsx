import React from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import styled from 'styled-components'
import Typography from '../shared/components/Typography'

const Wrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 1rem;
`

export default function NoMatch() {
  return (
    <Wrapper>
      <Typography size="xxl">404</Typography>
      <Typography size="lg">Page Not Found</Typography>
    </Wrapper>
  )
}
