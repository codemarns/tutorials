import React from "react";
import {
  Container,
  Content,
  Header,
  Main,
  Panel,
  Sidebar,
  Wrapper,
} from "./common";
import SampleData from "./SampleData";
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
          <Container>
            <Content>
              <SampleData />
            </Content>
            <Panel />
          </Container>
        </Wrapper>
      </Main>
    </Context.Provider>
  );
}

export default App;
