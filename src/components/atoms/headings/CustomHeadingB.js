import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const CustomHeadingB = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ color, theme }) => ({
  textAlign: "center",
  fontSize: "30px",
  color: "#222",
  letterSpacing: "1px",
  textTransform: "uppercase",
  display: "grid",
  gridTemplateColumns: "1fr max-content 1fr",
  gridTemplateRows: "27px 0",
  gridGap: "20px",
  alignItems: "center",
  marginBottom: "32px",
  "&:before, &::after": {
    content: "' '",
    display: "block",
    borderBottom: `1px solid ${
      theme.palette[color] ? theme.palette[color].main : theme.palette.primary.main
    }`,
    borderTop: `1px solid ${
      theme.palette[color] ? theme.palette[color].main : theme.palette.primary.main
    }`,
    height: "5px",
    backgroundColor: "#f8f8f8",
  },
}));

export default CustomHeadingB;
