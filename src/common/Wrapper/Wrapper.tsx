import React from "react";
import cn from "classnames";
import { CommonProps } from "../../types";

type WrapperProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { codename, children } = props;

  return (
    <div
      className={cn(
        { [codename + "__wrapper"]: codename },
        "grid gap-3 overflow-hidden"
      )}
      style={{ gridTemplateColumns: "300px 1fr" }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
