import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global/Global";
import Router from "./router/Router";
import { Theme } from "./global/GlobalTheme";

function App() {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App;
