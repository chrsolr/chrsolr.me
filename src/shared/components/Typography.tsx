import React, { ReactNode } from 'react'
import styled, { DefaultTheme } from 'styled-components'

export type FontSizes = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

interface Props {
  children: ReactNode
  size?: FontSizes
  inheritFontColor?: boolean
  weight?: number
}

function getFontSize(size: FontSizes | undefined, theme: DefaultTheme) {
  return size ? theme.typography.fontSizes[size] : theme.typography.fontSizes.md
}

const Text = styled.p<{
  size?: FontSizes
  inheritFontColor?: boolean
  weight?: number
}>`
  color: ${(props => props.theme.colors.foreground)};
  font-size: ${((props) => getFontSize(props.size, props.theme))}
`

export default function Typography({ children, size, weight, inheritFontColor }: Props) {
  return (
    <Text size={size} weight={weight} inheritFontColor={inheritFontColor}>{children}</Text>
  )
}
