import 'styled-components'

interface Colors {
  900: string
  800: string
  700: string
  600: string
  500: string
  400: string
  300: string
  200: string
  100: string
  50: string
}

interface GreyColors extends Colors {
  0: string
}

interface FontWeight {
  thin: number
  light: number
  regular: number
  medium: number
  semibold: number
  bold: number
}

interface Sizes {
  xxl: string
  xl: string
  lg: string
  base: string
  sm: string
  xs: string
}

interface FontLineHeights extends Sizes {}
interface FontSizes extends Sizes {}
interface SpacingLevels extends Sizes {}

type AvailableSizes = 'xxl' | 'xl' | 'lg' | 'base' | 'sm' | 'xs'
export type AvailableColors =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'background'
  | 'grey'
export type AvailableFontWeights =
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
export type AvailableFontSizes = AvailableSizes
export type AvailableSpacing = AvailableSizes
export type AvailableFontLineHeights = AvailableSizes

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      accent: string
      background: string
      grey: GreyColors
    }
    typography: {
      fontSizes: FontSizes
      fontWeigths: FontWeight
      lineHeights: FontLineHeights
    }
    spacing: SpacingLevels
  }
}
