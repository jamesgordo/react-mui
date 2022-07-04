import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";
import { Box, Typography, Divider } from "@mui/material";

HeadingList.propTypes = {
  title: PropTypes.string,
  component: PropTypes.any,
};

export default function HeadingList({ title, component, ...rest }) {
  const heading = faker.lorem.sentence();
  const colors = ["primary", "secondary", "success", "error", "warning", "info"];
  const PassedComponent = component;

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h5">{title}</Typography>
      <Divider sx={{ mt: 2, mb: 4 }} />

      {colors.map((color) => (
        <PassedComponent color={color} variant="h6" key={color}>
          {heading}
        </PassedComponent>
      ))}
    </Box>
  );
}
