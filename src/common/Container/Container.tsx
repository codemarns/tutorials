import React, { useContext } from "react";
import cn from "classnames";
import { Context } from "../../App";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = (props) => {
  const { children } = props;
  const { codename } = useContext(Context);

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
