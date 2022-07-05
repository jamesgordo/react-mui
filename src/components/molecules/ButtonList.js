import PropTypes from "prop-types";
import { Box, Typography, Divider } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

ButtonList.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string,
  component: PropTypes.any,
};

export default function ButtonList({ title, code, component }) {
  const colors = ["primary", "secondary", "success", "error", "warning", "info"];
  const PassedComponent = component;
  const handleClick = (button) => alert(`You clicked ${button}`);

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5">{title}</Typography>
      <Divider sx={{ mt: 2, mb: 4 }} />

      {code && (
        <SyntaxHighlighter language="javascript" style={monokai}>
          {code}
        </SyntaxHighlighter>
      )}

      {colors.map((color) => (
        <PassedComponent
          key={color}
          color={color}
          variant="contained"
          onClick={() => handleClick(`${title} - ${color}`)}
          sx={{ mr: 2 }}
        >
          {color}
        </PassedComponent>
      ))}
    </Box>
  );
}
