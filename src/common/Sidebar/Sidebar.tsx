import React, { useContext } from "react";
import cn from "classnames";
import { Context } from "../../App";
import { Card } from "../../components";
import { Nav } from "./components";

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
      <Nav />
    </Card>
  );
};

export default Sidebar;
