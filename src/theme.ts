import { createGlobalStyle, DefaultTheme } from 'styled-components'

export type Theme = 'light' | 'dark'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
  }
`

const lightTheme: DefaultTheme['colors'] = {
  foreground: '#181818',
  background: '#fafafa',
  accent: '#f96816',
}

const darkTheme: DefaultTheme['colors'] = {
  foreground: '#fafafa',
  background: '#181818',
  accent: '#f96816',
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
        xxl: '2rem',
        xl: '1.75rem',
        lg: '1.5rem',
        md: '1.5rem',
        sm: '1.25rem',
        xs: '1rem',
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
    },
  }
}
