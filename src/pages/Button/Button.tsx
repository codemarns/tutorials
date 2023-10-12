import React from "react";
import type { TButtonProps } from "./types";
import { Content, Panel } from "../../common";
import SampleData from "../../SampleData";

const Button: React.FC<TButtonProps> = (props) => {
  const { label, children, ...restProps } = props;

  return (
    <>
      <Content>
        <SampleData />
      </Content>
      <Panel />
    </>
  );
  return <button {...restProps}>{label || children}</button>;
};

export default Button;
