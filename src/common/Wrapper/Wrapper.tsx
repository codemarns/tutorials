import React, { useContext } from "react";
import cn from "classnames";
import { Context } from "../../App";

type WrapperProps = React.HTMLAttributes<HTMLDivElement>;

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children, ...restProps } = props;
  const { codename } = useContext(Context);

  return (
    <div
      {...restProps}
      className={cn(
        { [codename + "__wrapper"]: codename },
        "grid overflow-hidden"
      )}
      style={{ gridTemplateColumns: "300px 1fr 300px" }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
