import React from "react";
import cn from "classnames";
import { Card } from "../../components";
import { CommonProps } from "../../types";

type PanelProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;

const Panel: React.FC<PanelProps> = (props) => {
  const { codename } = props;
  return (
    <Card
      className={cn({ [codename + "__panel"]: codename }, "min-h-full")}
      title={"Component Panel"}
      id={"panel"}
      actions={[]}
    >
      <div className="flex-1 h-[1200px]">Coming Soon...</div>
    </Card>
  );
};

export default Panel;
