import styled, { DefaultTheme } from 'styled-components'

export type FontSizes = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

function getFontSize(size: FontSizes | undefined, theme: DefaultTheme) {
  return size ? theme.typography.fontSizes[size] : theme.typography.fontSizes.md
}

const Typography = styled.p<{
  size?: FontSizes
  inheritFontColor?: boolean
  weight?: number
}>`
  color: ${(props) => props.theme.colors.foreground};
  font-size: ${(props) => getFontSize(props.size, props.theme)};
  margin-bottom: 1rem;
  line-height: ${(props) => props.theme.typography.lineHeights.lg};
`

export default Typography
