import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const StyledContainer = styled.div`
  background-color: transparent;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 7.25rem;
  padding-bottom: 1rem;

  @media ${(props) => props.theme.deviceSizes.sm} {
    max-width: 540px;
  }

  @media ${(props) => props.theme.deviceSizes.md} {
    max-width: 720px;
  }

  @media ${(props) => props.theme.deviceSizes.lg} {
    max-width: 960px;
  }

  @media ${(props) => props.theme.deviceSizes.xl} {
    max-width: 1140px;
  }

  @media ${(props) => props.theme.deviceSizes.xxl} {
    max-width: 1320px;
  }
`

function Container({ children, ...props }: Props) {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container
