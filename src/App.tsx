import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Routes, Route } from "react-router-dom";
import { Button, Home, NotFound } from "./pages";
import { Header, Sidebar, Wrapper } from "./common";
import { CommonProps } from "./types";
import { mainStyles } from "./styles";

export const Context = React.createContext<CommonProps>({});

function App() {
  const codename = "codemarns";
  const element = document.documentElement;
  const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && themeQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  themeQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const { main } = mainStyles;
  const baseClasses = cn(codename, main.base);
  return (
    <Context.Provider value={{ codename, theme, setTheme }}>
      <main id="main" className={baseClasses}>
        <div
          className={main.container.base}
          style={{ gridTemplateRows: "4rem 1fr" }}
        >
          <Header />
          <Wrapper>
            <Sidebar />
            <Routes>
              <Route path="/tutorials/" element={<Home />} />
              <Route path="/tutorials/button" element={<Button />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Wrapper>
        </div>
      </main>
    </Context.Provider>
  );
}

export default App;
