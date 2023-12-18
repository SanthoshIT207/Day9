import Footer from "./Footer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Purity from "../Purity";
import StateHook from "../StateHook";
import { createContext, useState } from "react";

// Step 1
export const ThemeContext = createContext({});

function Main() {
  const [theme, setTheme] = useState({
    bgColor: "black",
    textColor: "white",
  });

  function onClick() {
    theme.bgColor === "black"
      ? setTheme({
          textColor: "black",
          bgColor: "white",
        })
      : setTheme({ textColor: "white", bgColor: "black" });
  }

  const values = {
    theme,
    onClick,
  };

  // Step 2
  return (
    <ThemeContext.Provider value={values}>
      <Navbar />
      <HomePage />
      <Footer theme={theme} />
      <StateHook />
      <Purity />
    </ThemeContext.Provider>
  );
}

export default Main;