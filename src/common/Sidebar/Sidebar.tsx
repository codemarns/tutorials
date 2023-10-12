import React, { useContext } from "react";
import cn from "classnames";
import { Context } from "../../App";
import { Card } from "../../components";
import { Nav } from "./components";
import { sidebarStyles } from "../../styles";

type SidebarProps = React.HTMLAttributes<HTMLDivElement>;

const Sidebar: React.FC<SidebarProps> = () => {
  const { codename } = useContext(Context);
  const { sidebar } = sidebarStyles;
  return (
    <Card
      className={cn({ [codename + "__sidebar"]: codename }, sidebar.base)}
      id={"sidebar"}
      actions={[]}
    >
      <Nav />
    </Card>
  );
};

export default Sidebar;
