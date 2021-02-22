import { black, green, grey, red, white } from './colors'

const theme = {
  borderRadius: 12,
  breakpoints: {
    mobile: 400,
  },
  color: {
    black,
    grey,
    primary: {
      light: red[200],
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
    white,
    text: {
      main: 'lightgray',
      highlighted: 'white',
      primary1: '#FABC44',
      primary2: '#af7c31',
      primary3: '#FABC4526',
      success: '#4caf50',
      dark: '#242828',
    },
    background: {
      main: '#242828',
      light: '#313535',
    },
  },
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
  },
  topBarSize: 72,
}

export default theme