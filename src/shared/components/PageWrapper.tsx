import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Container from './Container'

interface Props {
  children: ReactNode
}

const Wrapper = styled(Container)`
  padding-top: calc(${(props) => props.theme.dimensions.topbarHeight} + 1rem);
`

function PageWrapper({ children, ...props }: Props) {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default PageWrapper
