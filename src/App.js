import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

const lightTheme = {
  elementsColor: "white",
  textColor: "black",
  bgcColor: "hsl(0, 0%, 98%)",
};

const darkTheme = {
  elementsColor: "hsl(209, 23%, 22%);",
  textColor: "white",
  bgcColor: "hsl(207, 26%, 17%)",
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toogleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Header toogleTheme={toogleTheme} />
        <Nav />
      </>
    </ThemeProvider>
  );
}

export default App;
