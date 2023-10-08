import React from "react";
import cn from "classnames";
import { CommonProps } from "../../types";
import { containerStyles as styles } from "../styles";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;

const Container: React.FC<ContainerProps> = (props) => {
  const { codemarns, className, children, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={cn(
        { [codemarns + "__container"]: codemarns },
        styles.base,
        className
      )}
    >
      <div className={styles.header.base}>
        <h1 className={styles.header.title}>{`Component Title`}</h1>
      </div>
      <div className={cn("content-with-scroll", styles.content.base)}>
        {children}
      </div>
    </div>
  );
};

export default Container;
