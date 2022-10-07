import styled, { DefaultTheme } from 'styled-components'
import { FontSizes, FontWeight } from '../../theme'

function getFontSize(size: FontSizes | undefined, theme: DefaultTheme) {
  return size ? theme.typography.fontSizes[size] : theme.typography.fontSizes.md
}

const Typography = styled.p<{
  color?: string
  size?: FontSizes
  inheritFontColor?: boolean
  weight?: FontWeight
}>`
  color: ${(props) => props.color || props.theme.colors.foreground};
  font-size: ${(props) => getFontSize(props.size, props.theme)};
  margin-bottom: 1rem;
  line-height: ${(props) => props.theme.typography.lineHeights.lg};
  font-weight: ${(props) =>
    props.theme.typography.fontWeights[props.weight || 'regular']};
`

export default Typography
