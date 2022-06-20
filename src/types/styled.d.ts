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

interface DeviceSizes {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      foreground: string
      background: string
      accent: string
    }
    typography: {
      fontSizes: FontSizes
      fontWeights: FontWeight
      lineHeights: FontLineHeights
    }
    deviceSizes: DeviceSizes
    dimensions: {
      topbarHeight: string
    }
  }
}
