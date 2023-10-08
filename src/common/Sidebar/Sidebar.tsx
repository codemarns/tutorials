import React, { useContext } from "react";
import cn from "classnames";
import { Context } from "../../App";
import { Card } from "../../components";

type SidebarProps = React.HTMLAttributes<HTMLDivElement>;

const Sidebar: React.FC<SidebarProps> = () => {
  const { codename } = useContext(Context);
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
