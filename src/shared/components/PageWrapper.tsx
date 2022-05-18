import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Container from './Container'

interface Props {
  children: ReactNode
}

const Wrapper = styled(Container)`
  padding-top: calc(${(props) => props.theme.dimensions.topbarHeight} + 1rem);
`

function PageWrapper({ children }: Props) {
  return <Wrapper>{children}</Wrapper>
}

export default PageWrapper
