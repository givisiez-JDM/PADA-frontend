import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Global/Global";
import Router from "./router/Router";
import { defaultTheme } from "./Global/GlobalTheme";

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
