import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/Themes";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
//api for details https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,borders,subregion,currencies,languages,tld

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toogleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Header toogleTheme={toogleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
