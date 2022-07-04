import { Container, Typography, Button, Box } from "@mui/material";
import ButtonList from "./components/molecules/ButtonList";
import CustomButtonA from "./components/atoms/CustomButtonA";
import CustomButtonB from "./components/atoms/CustomButtonB";
import CustomHeadingA from "./components/atoms/headings/CustomHeadingA";
import CustomHeadingB from "./components/atoms/headings/CustomHeadingB";
import HeadingList from "./components/molecules/HeadingList";

function App() {
  return (
    <Container sx={{ padding: 8 }}>
      <Typography variant="h4" component="h4" align="center" sx={{ mb: 2 }}>
        React MUI Theming Demo
      </Typography>
      <Typography align="center" sx={{ mb: 8 }}>
        This is a simple demo on how to customize React MUI using the custom components and Theming
        approach.
      </Typography>

      <Box sx={{ mb: 16 }}>
        <Typography variant="h4" component="h4" align="center" sx={{ mb: 8 }}>
          Button Examples
        </Typography>

        <ButtonList title="Default MUI Base Button" component={Button} />
        <ButtonList title="Custom Button A" component={CustomButtonA} />
        <ButtonList title="Custom Button B" component={CustomButtonB} />
      </Box>

      <Box sx={{ mb: 16 }}>
        <Typography variant="h4" component="h4" align="center" sx={{ mb: 8 }}>
          Heading Examples
        </Typography>

        <HeadingList title="Default MUI Typography Heading" component={Typography} />
        <HeadingList title="Custom Typography Heading A" component={CustomHeadingA} />
        <HeadingList title="Custom Typography Heading B" component={CustomHeadingB} />
      </Box>
    </Container>
  );
}

export default App;
