import React, { useContext } from "react";
import cn from "classnames";
import { Context } from "../../App";
import { Card } from "../../components";
import { containerStyles } from "../../styles";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = (props) => {
  const { title, children } = props;
  const { codename } = useContext(Context);
  const { container } = containerStyles;
  return (
    <Card
      className={cn({ [codename + "__container"]: codename }, container.base)}
      title={title}
      id={"container"}
      actions={[]}
    >
      {children}
    </Card>
  );
};

export default Container;
