import { Container, Typography, Box } from "@mui/material";
import logo from "./logo.svg";

function App() {
  return (
    <Container>
      <Box>
        <Box sx={{ mx: "auto", textAlign: "center" }}>
          <img src={logo} className="App-logo" alt="logo" width={200} />
        </Box>
        <Typography variant="h4" component="h4" align="center">
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
