import 'styled-components'
import 'styled-components/cssprop'

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
  md: string
  sm: string
  xs: string
}

interface FontLineHeights extends Sizes {}
interface FontSizes extends Sizes {}
interface SpacingLevels extends Sizes {}

interface DeviceSizes {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

type AvailableSizes = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type AvailableDeviceSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
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
      fontColor: {
        main: string
        light: string
      }
    }
    typography: {
      fontSizes: FontSizes
      fontWeigths: FontWeight
      lineHeights: FontLineHeights
    }
    spacing: SpacingLevels
    deviceSizes: DeviceSizes
    dimensions: {
      topbarHeight: string
    }
  }
}
