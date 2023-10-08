import cn from "classnames";
import { useEffect, useState } from "react";
import { Container, Panel, Sidebar } from "./common";
import SampleData from "./SampleData";

function App() {
  const codemarns = "codemarns";
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const styles = {
    main: "w-screen h-screen max-w-[1920px] mx-auto p-3 overflow-hidden grid gap-3",
  };

  return (
    <main
      id="main"
      className={cn(codemarns, styles.main)}
      style={{ gridTemplateColumns: "300px 1fr" }}
    >
      <Sidebar codemarns={codemarns} />
      <div
        className="w-full h-full overflow-hidden grid gap-3"
        style={{ gridTemplateColumns: "1fr 300px" }}
      >
        <Container codemarns={codemarns}>
          <div className="flex-1 h-auto">
            <SampleData />
          </div>
        </Container>
        <Panel codemarns={codemarns} />
      </div>
    </main>
  );
}

export default App;
