import { createGlobalStyle, DefaultTheme } from 'styled-components'

export type Theme = 'light' | 'dark'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    line-height: ${(props) => props.theme.typography.lineHeights.md};
  }

  html {
    overflow-y: scroll;
    font-size: 16px;
    height: 100%;
  }

  body {
    height: 100%;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.foreground};
    font-family: 'Raleway', sans-serif;
    font-size: ${(props) => props.theme.typography.fontSizes.md};
    font-weight: ${(props) => props.theme.typography.fontWeights.regular};

    #root {
      height: 100%;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.accent};
    }

    p, h1, h2, h3, h4, h5, h6 {
      margin-bottom: 1rem;

    }

    h1, h2, h3, h4, h5, h6 {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`

export type FontSizes = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type FontWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'

/**
 * Potential Color schema
 *
 * // color 1: #24174C
 * // color 2: #3D308F
 * // dark-text: #212529
 * // grey: #f5f6f5
 * // white: #fff
 * // accent 1: #dc4b74
 * // accent 2: #e79e37
 */
const lightTheme: DefaultTheme['colors'] = {
  background: '#fff',
  foreground: '#212529',
  accent: '#dc4b74',
  white: '#fff'
}

const darkTheme: DefaultTheme['colors'] = {
  background: '#212529',
  foreground: '#f5f6f5',
  accent: '#dc4b74',
  white: '#fff'
}

export function getTheme(theme: Theme): DefaultTheme {
  return {
    colors: theme === 'light' ? lightTheme : darkTheme,
    typography: {
      fontSizes: {
        xxl: '2.5rem',
        xl: '1.5rem',
        lg: '1.25rem',
        md: '1rem',
        sm: '0.085rem',
        xs: '0.075rem',
      },
      fontWeights: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      lineHeights: {
        xxl: '2',
        xl: '1.75',
        lg: '1.5',
        md: '1.5',
        sm: '1.25',
        xs: '1',
      },
    },
    deviceSizes: {
      xs: `(min-width: 0)`,
      sm: `(min-width: 576px)`,
      md: `(min-width: 768px)`,
      lg: `(min-width:  992px)`,
      xl: `(min-width: 1200px)`,
      xxl: `(min-width: 1400px)`,
    },
    dimensions: {
      topbarHeight: '6.25rem',
      borderRadius: '0.75rem',
    },
  }
}
