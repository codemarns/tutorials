import cn from "classnames";
import { Container, Content, Header, Panel, Sidebar, Wrapper } from "./common";
import { mainStyles as styles } from "./styles";
import SampleData from "./SampleData";

function App() {
  const codename = "codemarns";

  return (
    <main
      id="main"
      className={cn(codename, styles.main)}
      style={{ gridTemplateRows: "3.5rem 1fr" }}
    >
      <Header codename={codename} />
      <Wrapper codename={codename}>
        <Sidebar codename={codename} />
        <Container codename={codename}>
          <Content codename={codename}>
            <SampleData />
          </Content>
          <Panel codename={codename} />
        </Container>
      </Wrapper>
    </main>
  );
}

export default App;
