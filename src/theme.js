const createMediaQuery = n => `@media screen and (min-width:${n}em)`

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      }
    })
  )

export const breakpoints = [32, 40, 48, 64]

export const mediaQueries = breakpoints.map(createMediaQuery)

const aliases = ['sm', 'md', 'lg', 'xl']

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 4, 8, 16, 32, 64, 128]

export const font = `'Roboto','Helvetica Neue',Helvetica,Arial,sans-serif`

export const fontSizes = [12, 14, 16, 20, 24, 32, 48]

export const regular = 400
export const bold = 600

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  regular,
  bold
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.025em'
}

// color palette
const black = 'rgba(0,0,0,.87)'
const white = '#fff'
const text = '#001833'
const lightBlue = '#cdf'
const blue = '#007aff'
const darkBlue = '#049'
const lightGray = '#f6f8fa'
const borderGray = '#d1d6db'
const gray = '#646667'
const darkGray = '#364049'
const lightGreen = '#cec'
const green = '#82bc00' // primary
const darkGreen = '#4a7628' // secondary
const lightRed = '#fcc'
const red = '#c00'
const darkRed = '#800'
const lightOrange = '#feb'
const orange = '#fa0'
const darkOrange = '#a50'
const lightPurple = '#ecf'
const purple = '#70b'
const darkPurple = '#407'

const black54 = 'rgba(0,0,0,.54)'
const black42 = 'rgba(0,0,0,.42)'
const black38 = 'rgba(0,0,0,.38)'
const black26 = 'rgba(0,0,0,.26)'
const black12 = 'rgba(0,0,0,.12)'
const black06 = 'rgba(0,0,0,.06)'

const invalid = 'rgba(230,0,0,.87)'
const riskVeryHigh = 'rgba(255,0,0,1)'
const riskHigh = 'rgba(255,153,0,1)'
const riskModerate = 'rgba(252,204,0,1)'
const riskLow = 'rgba(255,255,153,1)'
const riskVeryLow = 'rgba(153,204,255,1)'

// tints
const flatten = (name, colors) =>
  colors.reduce((a, b, i) => {
    const color = {
      [name + i]: b
    }
    return { ...a, ...color }
  }, {})

const blues = [lightBlue, lightBlue, blue, blue]
const grays = [lightGray, lightGray, gray, gray]
const greens = [lightGreen, lightGreen, green, green]
const reds = [lightRed, lightRed, red, red]
const oranges = [lightOrange, lightOrange, orange, orange]
const purples = [lightPurple, lightPurple, purple, purple]

const colors = {
  primary: green,
  secondary: darkGreen,
  tertiary: gray,

  black,
  black54,
  black42,
  black38,
  black26,
  black12,
  black06,
  invalid,
  riskVeryHigh,
  riskVeryLow,
  riskHigh,
  riskLow,
  riskModerate,
  white,
  text,
  blue,
  lightBlue,
  darkBlue,
  gray,
  lightGray,
  borderGray,
  darkGray,
  green,
  lightGreen,
  darkGreen,
  red,
  lightRed,
  darkRed,
  orange,
  lightOrange,
  darkOrange,
  purple,
  lightPurple,
  darkPurple,
  blues,
  greens,
  reds,
  oranges,
  purples,
  ...flatten('blue', blues),
  ...flatten('gray', grays),
  ...flatten('green', greens),
  ...flatten('red', reds),
  ...flatten('orange', oranges),
  ...flatten('purple', purples)
}

export { colors }

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = [0, 2, 6]
export const radius = '2px'

export const maxContainerWidth = '1280px'

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
]

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`
}

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)'
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)'
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)'

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn
}

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`
}

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  fontWeights,
  letterSpacings,
  regular,
  bold,
  colors,
  radii,
  radius,
  boxShadows,
  maxContainerWidth,
  duration,
  timingFunctions,
  transitionDelays
}

export default theme
