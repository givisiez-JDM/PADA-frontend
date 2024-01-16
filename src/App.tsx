import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global/Global";
import Router from "./router/Router";
import { defaultTheme } from "./global/GlobalTheme";

function App() {

  return (
    <>
     <ThemeProvider theme={defaultTheme}>
       <Router />
       <GlobalStyle />
     </ThemeProvider>
    </>
  )
}

export default App;
