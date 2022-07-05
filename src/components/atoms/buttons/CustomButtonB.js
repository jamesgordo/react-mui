import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButtonB = styled(Button, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ color, theme }) => ({
  borderRadius: "45px",
  padding: "6px 12px",
  transition: "all 0.3s ease 0s",
  background: "none",
  color: "white",
  backgroundColor: `${theme.palette[color]?.main}`,
  "&:hover": {
    backgroundColor: `${theme.palette[color]?.main}`,
    boxShadow: `0px 15px 20px ${theme.palette[color]?.light}`,
    color: "#fff",
    transform: "translateY(-7px)",
  },
}));

export default CustomButtonB;
