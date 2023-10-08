import React from "react";
import cn from "classnames";
import { Card } from "../../components";
import { CommonProps } from "../../types";

type SidebarProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { codename } = props;
  return (
    <Card
      className={cn({ [codename + "__sidebar"]: codename }, "min-h-full")}
      title={"Component List"}
      id={"sidebar"}
      actions={[]}
    >
      <div className="flex-1 h-[1200px]">Menu</div>
    </Card>
  );
};

export default Sidebar;
