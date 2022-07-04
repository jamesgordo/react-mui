// metrics in "rem" not "px"
const pxToRem = (val) => `${val / 16}rem`;

/**
 * MUI Typography
 * @see https://mui.com/material-ui/customization/typography/
 */
const typography = {
  fontFamily: "'Roboto', sans-serif",
  h1: {
    fontSize: pxToRem(72),
  },
  h2: {
    fontSize: pxToRem(64),
  },
  h3: {
    fontSize: pxToRem(56),
  },
  h4: {
    fontSize: pxToRem(48),
  },
  h5: {
    fontSize: pxToRem(40),
  },
  h6: {
    fontSize: pxToRem(32),
  },
  subtitle1: {
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontSize: pxToRem(14),
  },
  body1: {
    fontSize: pxToRem(16),
  },
  body2: {
    fontSize: pxToRem(14),
  },
  button: {
    fontSize: pxToRem(14),
  },
  caption: {
    fontSize: pxToRem(16),
  },
  overline: {
    fontSize: pxToRem(14),
  },
};

export default typography;
