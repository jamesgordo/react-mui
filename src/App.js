import { Container, Typography, Button, Box } from "@mui/material";
import ButtonList from "./components/molecules/ButtonList";
import CustomButtonA from "./components/atoms/buttons/CustomButtonA";
import CustomButtonB from "./components/atoms/buttons/CustomButtonB";
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

        <ButtonList
          title="Default MUI Base Button"
          component={Button}
          code={`import Button from "@mui/material/Button"\n\n// How to use\n<Button color="primary" onClick="{() => alert('You clicked this button')}">Click Here</Button>`}
        />
        <ButtonList
          title="Custom Button A"
          component={CustomButtonA}
          code={`import CustomButtonA from "./components/atoms/buttons/CustomButtonA"\n\n// How to use\n<CustomButtonA color="primary" onClick="{() => alert('You clicked this button')}">Click Here</CustomButtonA>`}
        />
        <ButtonList
          title="Custom Button B"
          component={CustomButtonB}
          code={`import CustomButtonB from "./components/atoms/buttons/CustomButtonB"\n\n// How to use\n<CustomButtonB color="primary" onClick="{() => alert('You clicked this button')}">Click Here</CustomButtonB>`}
        />
      </Box>

      <Box sx={{ mb: 16 }}>
        <Typography variant="h4" component="h4" align="center" sx={{ mb: 8 }}>
          Heading Examples
        </Typography>

        <HeadingList
          title="Default MUI Typography Heading"
          component={Typography}
          code={`import Typography from "@mui/material/Typography"\n\n// How to use\n<Typography color="primary">My Sample Title</Typography>`}
        />
        <HeadingList
          title="Custom Typography Heading A"
          component={CustomHeadingA}
          code={`import CustomHeadingA from "./components/atoms/headings/CustomHeadingA"\n\n// How to use\n<CustomHeadingA color="primary">My Sample Title</CustomHeadingA>`}
        />
        <HeadingList
          title="Custom Typography Heading B"
          component={CustomHeadingB}
          code={`import CustomHeadingB from "./components/atoms/headings/CustomHeadingB"\n\n// How to use\n<CustomHeadingB color="primary">My Sample Title</CustomHeadingB>`}
        />
      </Box>
    </Container>
  );
}

export default App;
