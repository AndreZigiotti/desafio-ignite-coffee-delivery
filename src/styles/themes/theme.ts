const screenSizes = {
  xsMax: '575px',
  smMin: '576px',
  smMax: '767px',
  mdMin: '768px',
  mdMax: '991px',
  lgMin: '992px',
  lgMax: '1199px',
  xlMin: '1200px',
  xlMax: '1399px',
  xxlMin: '1400px'
}

const devices = {
  phone: `(min-width: ${screenSizes.smMin})`,
  tablet: `(min-width: ${screenSizes.mdMin})`,
  desktop: `(min-width: ${screenSizes.lgMin})`,
  desktopXl: `(min-width: ${screenSizes.xlMin})`,
  desktopXxl: `(min-width: ${screenSizes.xxlMin})`
}

export const customTheme = {
  devices,
  contexts: {
    primary: {
      100: '#EBE5F9',
      300: '#8047F8',
      500: '#4B2995'
    },
    secondary: {
      100: '#F1E9C9',
      300: '#DBAC2C',
      500: '#C47F17'
    },
    gray: {
      50: '#F3F2F2',
      100: '#EDEDED',
      200: '#E6E5E5',
      300: '#D7D5D5',
      400: '#8D8686',
      500: '#574F4D',
      600: '#403937',
      700: '#272221',
    },
    light: {
      50: '#FFFFFF',
      100: '#FAFAFA'
    }
  }
}