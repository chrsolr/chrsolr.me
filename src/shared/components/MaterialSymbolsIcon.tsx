import React from 'react'
import styled from 'styled-components'

interface Props {
  iconName: string
  type: 'rounded'
  onClick?: () => void
}

const StyledMaterialSymbolsRoundedIcon = styled.i.attrs(() => ({
  className: 'material-symbols-rounded',
}))<{}>`
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;
  font-size: ${(props) => props.theme.typography.fontSizes.xxl};
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`

function MaterialSymbolsIcon({ iconName, type, onClick }: Props) {
  return (
    <StyledMaterialSymbolsRoundedIcon onClick={onClick}>
      {iconName}
    </StyledMaterialSymbolsRoundedIcon>
  )
}

export default MaterialSymbolsIcon
