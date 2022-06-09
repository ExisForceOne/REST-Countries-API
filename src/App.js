import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/Themes";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Details from "./views/Details/Details";
import NotFound from "./views/NotFound/NotFound";

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
          <Route path="details/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
