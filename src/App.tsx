import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Header, Main, Sidebar, Wrapper } from "./common";
import { CommonProps } from "./types";
import { Button, Home, NotFound } from "./pages";

export const Context = React.createContext<CommonProps>({});

function App() {
  const codename = "codemarns";

  return (
    <Context.Provider value={{ codename }}>
      <Main>
        <Header />
        <Wrapper>
          <Sidebar />
          <Container>
            <Routes>
              <Route path="/tutorials/" element={<Home />} />
              <Route path="/tutorials/button" element={<Button />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Wrapper>
      </Main>
    </Context.Provider>
  );
}

export default App;
