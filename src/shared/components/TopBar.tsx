import React from 'react'
import styled from 'styled-components'

interface Props {
  headerTitle: string[]
}

const StyledTopBarContainer = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 1rem 1rem;
  padding: ${(props) => props.theme.spacing.xxl};

  span {
    &:nth-child(1) {
      color: ${(props) => props.theme.colors.primary};
    }

    &:nth-child(2) {
      color: ${(props) => props.theme.colors.secondary};
    }

    &:nth-child(3) {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`

const StyledBrandHeader = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeigths.semibold};
  font-size: ${(props) => props.theme.typography.fontSizes.lg};
`

export default function TopBar({ headerTitle }: Props) {
  return (
    <StyledTopBarContainer>
      <StyledBrandHeader>
        {headerTitle.map((v) => (
          <span>{v}</span>
        ))}
      </StyledBrandHeader>
    </StyledTopBarContainer>
  )
}
