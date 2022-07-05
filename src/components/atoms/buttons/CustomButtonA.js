import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

const CustomButtonA = styled(Button, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ color, theme }) => ({
  padding: "6px 12px",
  border: `2px solid ${blueGrey[900]}`,
  borderRadius: 0,
  position: "relative",
  color: blueGrey[900],
  background: "none",
  "&::before": {
    content: "''",
    backgroundColor: `${theme.palette[color]?.main}`,
    position: "absolute",
    left: "0.2rem",
    top: "0.2rem",
    height: "108%",
    width: "102%",
    zIndex: "-1",
    transition: "all 0.4s ease",
  },
  "&:hover::before": {
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  "&:hover": {
    color: "white",
    backgroundColor: `${theme.palette[color]?.main}`,
  },
}));

export default CustomButtonA;
