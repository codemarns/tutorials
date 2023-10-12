import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Main, Sidebar, Wrapper } from "./common";
import { Button, Home, NotFound } from "./pages";
import { CommonProps } from "./types";

export const Context = React.createContext<CommonProps>({});

function App() {
  const codename = "codemarns";

  return (
    <Context.Provider value={{ codename }}>
      <Main>
        <Header />
        <Wrapper>
          <Sidebar />
          <Routes>
            <Route path="/tutorials/" element={<Home />} />
            <Route path="/tutorials/button" element={<Button />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Wrapper>
      </Main>
    </Context.Provider>
  );
}

export default App;
