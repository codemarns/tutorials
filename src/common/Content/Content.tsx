import React from "react";
import cn from "classnames";
import { Card } from "../../components";
import { CommonProps } from "../../types";

type ContentProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;

const Content: React.FC<ContentProps> = (props) => {
  const { codename, children } = props;

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
