import React, { useContext } from "react";
import cn from "classnames";
import { Context } from "../../App";
import { Card } from "../../components";

type ContentProps = React.HTMLAttributes<HTMLDivElement>;

const Content: React.FC<ContentProps> = (props) => {
  const { children } = props;
  const { codename } = useContext(Context);

  return (
    <Card
      className={cn({ [codename + "__content"]: codename }, "min-h-full")}
      title={"Component Title"}
      id={"content"}
      actions={[]}
    >
      {children}
    </Card>
  );
};

export default Content;
