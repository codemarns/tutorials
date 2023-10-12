import React, { useContext } from "react";
import cn from "classnames";
import { Context } from "../../App";
import { mainStyles as styles } from "./styles";

type MainProps = React.HTMLAttributes<HTMLDivElement>;

const Main: React.FC<MainProps> = (props) => {
  const { children } = props;
  const { codename } = useContext(Context);

  const baseClasses = cn(codename, styles.main);

  return (
    <main
      id="main"
      className={baseClasses}
      style={{ gridTemplateRows: "4rem 1fr" }}
    >
      {children}
    </main>
  );
};

export default Main;
