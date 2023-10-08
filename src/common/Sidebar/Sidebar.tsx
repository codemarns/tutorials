import React from "react";
import cn from "classnames";
import { CommonProps } from "../../types";
import { sidebarStyles as styles } from "../styles";

type SidebarProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { codemarns, ...restProps } = props;
  return (
    <aside
      {...restProps}
      className={cn({ [codemarns + "__sidebar"]: codemarns }, styles.base)}
    >
      <div className={styles.header.base}>
        <img
          alt="codemarns logo"
          src={"/codemarns-logo.svg"}
          className={styles.img}
        />
        <h1 className={cn(styles.header.title, "text-2xl")}>
          <span className={styles.title.code}>code</span>
          <span className={styles.title.marns}>marns</span>
        </h1>
      </div>

      <div className={cn("content-with-scroll", styles.content.base)}>
        <div className="flex-1 h-[1200px]">Menu</div>
      </div>
    </aside>
  );
};

export default Sidebar;
