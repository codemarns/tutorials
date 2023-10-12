import React, { useContext } from "react";
import cn from "classnames";
import { Card } from "../../components";
import { Context } from "../../App";

type PanelProps = React.HTMLAttributes<HTMLDivElement>;

const Panel: React.FC<PanelProps> = () => {
  const { codename } = useContext(Context);
  return (
    <Card
      className={cn(
        { [codename + "__panel"]: codename },
        "min-h-full border-l layout-borders !rounded-none"
      )}
      title={"Panel"}
      id={"panel"}
      actions={[]}
    >
      <div className="flex-1 h-[1200px]">Coming Soon...</div>
    </Card>
  );
};

export default Panel;
