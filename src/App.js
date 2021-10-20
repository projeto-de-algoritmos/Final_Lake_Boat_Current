import { Container, Paper, ThemeProvider, Typography } from "@material-ui/core";
import MainPage from "./components/MainPage";

import Theme from "./theme";

import "./index.css";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
