import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import createTheme from "@mui/material/styles/createTheme";

/**
 * MUI Theming
 * @see https://mui.com/material-ui/customization/theming/
 */
const theme = createTheme({
  palette,
  typography,
  breakpoints,
});

export default theme;
