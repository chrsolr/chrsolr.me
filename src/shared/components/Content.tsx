import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const StyledContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  min-height: 50vh;
  /* @media ${(props) => props.theme.deviceSizes.sm} {
    padding: ${(props) => props.theme.spacing.base};
  } */
`

export default function Content({ children }: Props) {
  return <StyledContent>{children}</StyledContent>
}
