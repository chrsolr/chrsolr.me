import React from 'react'
import styled from 'styled-components'

interface Props {
  iconName: string
  type: 'rounded'
  fill?: boolean
  onClick?: () => void
}

const StyledMaterialSymbolsRoundedIcon = styled.i.attrs(() => ({
  className: 'material-symbols-rounded',
}))<{ fill?: boolean }>`
  font-variation-settings: 'FILL' ${(props) => (props.fill ? 1 : 0)}, 'wght' 200,
    'GRAD' 0, 'opsz' 48;
  font-size: ${(props) => props.theme.typography.fontSizes.xxl};
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`

function MaterialSymbolsIcon({
  iconName,
  type,
  fill,
  onClick,
  ...props
}: Props) {
  return (
    <StyledMaterialSymbolsRoundedIcon fill={fill} onClick={onClick} {...props}>
      {iconName}
    </StyledMaterialSymbolsRoundedIcon>
  )
}

export default MaterialSymbolsIcon
