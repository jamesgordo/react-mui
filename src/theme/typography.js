// metrics in "rem" not "px"
const pxToRem = (val) => `${val / 16}rem`;

/**
 * MUI Typography
 * @see https://mui.com/material-ui/customization/typography/
 * @see https://www.webdesignerdepot.com/2020/07/the-designers-guide-to-letter-spacing/
 */
const typography = {
  fontFamily: "'Roboto', sans-serif",
  h1: {
    fontSize: pxToRem(96),
    letterSpacing: -1.5,
  },
  h2: {
    fontSize: pxToRem(60),
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: pxToRem(48),
    letterSpacing: 0,
  },
  h4: {
    fontSize: pxToRem(34),
    letterSpacing: 0.25,
  },
  h5: {
    fontSize: pxToRem(96),
    letterSpacing: 0,
  },
  h6: {
    fontSize: pxToRem(16),
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontSize: pxToRem(16),
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontSize: pxToRem(14),
    letterSpacing: 0.1,
  },
  body1: {
    fontSize: pxToRem(16),
    letterSpacing: 0.5,
  },
  body2: {
    fontSize: pxToRem(14),
    letterSpacing: 0.25,
  },
  button: {
    ffontSize: pxToRem(14),
    letterSpacing: 1.25,
  },
  caption: {
    fontSize: pxToRem(12),
    letterSpacing: 0.4,
  },
  overline: {
    fontSize: pxToRem(10),
    letterSpacing: 1.5,
  },
};

export default typography;
