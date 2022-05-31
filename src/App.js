import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/Searchbar/Searchbar";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import Home from "./components/Home/Home";
//api https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,borders,subregion,currencies,languages,tld

const lightTheme = {
  elementsColor: "white",
  textColor: "black",
  bgcColor: "hsl(0, 0%, 98%)",
  borderRadius: "8px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
  wrapper: "min(1300px, 90%);",
};

const darkTheme = {
  elementsColor: "hsl(209, 23%, 22%);",
  textColor: "white",
  bgcColor: "hsl(207, 26%, 17%)",
  borderRadius: "8px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
  wrapper: "min(1300px, 90%);",
};

const variables = {};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toogleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? { ...darkTheme, ...variables } : { ...lightTheme, ...variables }}>
      <>
        <GlobalStyles />
        <Header toogleTheme={toogleTheme} />
        <Nav>
          <SearchBar />
          <CustomSelect />
        </Nav>
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
