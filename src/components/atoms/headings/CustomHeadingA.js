import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const CustomHeadingA = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ color, theme }) => ({
  position: "relative",
  marginBottom: 32,
  "&:before": {
    content: "''",
    position: "absolute",
    left: 0,
    bottom: "-7px",
    height: "5px",
    width: "55px",
    backgroundColor: theme.palette[color] ? theme.palette[color].main : theme.palette.primary.main,
  },
  "&:after": {
    content: "''",
    position: "absolute",
    left: 0,
    bottom: "-5px",
    height: "1px",
    width: "95%",
    maxWidth: "255px",
    backgroundColor: theme.palette[color] ? theme.palette[color].main : theme.palette.primary.main,
  },
}));

export default CustomHeadingA;
