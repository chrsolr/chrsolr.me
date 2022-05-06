import React from 'react'
import styled from 'styled-components'

interface Props {
  headerTitle: string
}

const StyledTopBarContainer = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 1rem 1rem;
  padding: ${(props) => props.theme.spacing.lg};
`

export default function TopBar({ headerTitle }: Props) {
  return <StyledTopBarContainer>{headerTitle}</StyledTopBarContainer>
}
