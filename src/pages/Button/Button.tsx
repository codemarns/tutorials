import React from "react";
import type { TButtonProps } from "./types";
import { Container, Panel } from "../../common";
import SampleData from "../../SampleData";

const Button: React.FC<TButtonProps> = (props) => {
  const { label, children, ...restProps } = props;

  return (
    <>
      <Container title="Button">
        <SampleData />
      </Container>
      <Panel />
    </>
  );
  return <button {...restProps}>{label || children}</button>;
};

export default Button;
