import React from "react";
import cn from "classnames";
import { CommonProps } from "../../types";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;

const Container: React.FC<ContainerProps> = (props) => {
  const { codename, children } = props;

  return (
    <div
      className={cn(
        { [codename + "__container"]: codename },
        "w-full h-full overflow-hidden grid gap-3"
      )}
      style={{ gridTemplateColumns: "1fr 300px" }}
    >
      {children}
    </div>
  );
};

export default Container;
