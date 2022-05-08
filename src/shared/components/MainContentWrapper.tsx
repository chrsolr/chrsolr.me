import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const StyledContent = styled.div`
  padding-top: 7.25rem;
  padding-bottom: 1rem;

  @media ${(props) => props.theme.deviceSizes.xs} {
    padding-left: ${(props) => props.theme.spacing.xs};
    padding-right: ${(props) => props.theme.spacing.xs};
  }

  @media ${(props) => props.theme.deviceSizes.sm} {
    padding-left: ${(props) => props.theme.spacing.sm};
    padding-right: ${(props) => props.theme.spacing.sm};
  }

  @media ${(props) => props.theme.deviceSizes.md} {
    padding-left: ${(props) => props.theme.spacing.md};
    padding-right: ${(props) => props.theme.spacing.md};
  }

  @media ${(props) => props.theme.deviceSizes.lg} {
    padding-left: ${(props) => props.theme.spacing.lg};
    padding-right: ${(props) => props.theme.spacing.lg};
  }

  @media ${(props) => props.theme.deviceSizes.xl} {
    padding-left: ${(props) => props.theme.spacing.xl};
    padding-right: ${(props) => props.theme.spacing.xl};
  }

  @media ${(props) => props.theme.deviceSizes.xxl} {
    padding-left: ${(props) => props.theme.spacing.xxl};
    adding:-right ${(props) => props.theme.spacing.xxl};
  }
`

export default function Content({ children }: Props) {
  return <StyledContent>{children}</StyledContent>
}
