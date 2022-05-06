import { createGlobalStyle, DefaultTheme } from 'styled-components'

export type Theme = 'light' | 'dark'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.grey[500]};
    font-family: 'Montserrat', 'Open Sans', sans-serif;
    font-size: ${(props) => props.theme.typography.fontSizes.base};
    font-weight: ${(props) => props.theme.typography.fontWeigths.regular};
    line-height: ${(props) => props.theme.typography.lineHeights.base};
  }
`

const lightTheme: DefaultTheme['colors'] = {
  primary: '',
  secondary: '',
  accent: '',
  background: '#ffffff',
  grey: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
}

const darkTheme: DefaultTheme['colors'] = {
  primary: '',
  secondary: '',
  accent: '',
  background: '#212121',
  grey: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
}

export function getTheme(theme: Theme): DefaultTheme {
  return {
    colors: theme === 'light' ? lightTheme : darkTheme,
    typography: {
      fontSizes: {
        xxl: '1.5rem',
        xl: '1.5rem',
        lg: '1.25rem',
        base: '1rem',
        sm: '0.085rem',
        xs: '0.075rem',
      },
      fontWeigths: {
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
        base: '1.5rem',
        sm: '1.25rem',
        xs: '1rem',
      },
    },
    spacing: {
      xxl: '2rem',
      xl: '1.75rem',
      lg: '1.5rem',
      base: '1rem',
      sm: '0.5rem',
      xs: '0.25rem',
    },
    deviceSizes: {
      xs: `(max-width: 0)`,
      sm: `(max-width: 576px)`,
      md: `(max-width: 768px)`,
      lg: `(max-width:  992px)`,
      xl: `(max-width: 1200px)`,
      xxl: `(max-width: 1400px)`,
    },
  }
}
