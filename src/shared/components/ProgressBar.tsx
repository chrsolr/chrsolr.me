import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const StyledProgressBar = styled.div<{ progress: number }>`
  background-color: ${(props) => darken(0.2, props.theme.colors.accent)};
  border-radius: 0.3125rem;
  width: 100%;
  height: 0.3rem;
  margin-bottom: 1rem;
  overflow: hidden;

  div {
    border-radius: 0.3125rem;
    background-color: ${(props) => props.theme.colors.accent};
    text-align: center;
    height: inherit;
    transition: 0.3s;
    width: ${(props) => props.progress}%;
  }
`

function ProgressBar({ progress }: { progress: number }) {
  return (
    <StyledProgressBar progress={progress}>
      <div></div>
    </StyledProgressBar>
  )
}

export default ProgressBar
