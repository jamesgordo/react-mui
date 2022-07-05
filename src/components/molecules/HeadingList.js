import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";
import { Box, Typography, Divider } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

HeadingList.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string,
  component: PropTypes.any,
};

export default function HeadingList({ title, code, component, ...rest }) {
  const heading = faker.lorem.words(5);
  const colors = ["primary", "secondary", "success", "error", "warning", "info"];
  const PassedComponent = component;

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h5">{title}</Typography>
      <Divider sx={{ mt: 2, mb: 4 }} />

      {code && (
        <SyntaxHighlighter language="javascript" style={monokai}>
          {code}
        </SyntaxHighlighter>
      )}

      {colors.map((color) => (
        <PassedComponent color={color} variant="h6" key={color}>
          {heading}
        </PassedComponent>
      ))}
    </Box>
  );
}
