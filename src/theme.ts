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
    font-family: 'Poppins', sans-serif;
    font-size: ${(props) => props.theme.typography.fontSizes.md};
    font-weight: ${(props) => props.theme.typography.fontWeigths.light};
    line-height: ${(props) => props.theme.typography.lineHeights.md};
    letter-spacing: 0.05rem;
  }
`

const lightTheme: DefaultTheme['colors'] = {
  primary: '#1f7a7a',
  secondary: '#cc3434',
  accent: '#2aa32a',
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
  primary: '#1f7a7a',
  secondary: '#cc3434',
  accent: '#2aa32a',
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
        xxl: '2.5rem',
        xl: '1.5rem',
        lg: '1.25rem',
        md: '1rem',
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
        md: '1.5rem',
        sm: '1.25rem',
        xs: '1rem',
      },
    },
    spacing: {
      xxl: '10rem',
      xl: '4rem',
      lg: '2.5rem',
      md: '2rem',
      sm: '1.25rem',
      xs: '1rem',
    },
    deviceSizes: {
      xs: `(min-width: 0)`,
      sm: `(min-width: 576px)`,
      md: `(min-width: 768px)`,
      lg: `(min-width:  992px)`,
      xl: `(min-width: 1200px)`,
      xxl: `(min-width: 1400px)`,
    },
  }
}
