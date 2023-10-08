import React from "react";
import cn from "classnames";
import { CommonProps } from "../../types";
import { sidebarStyles as styles } from "../styles";

type PanelProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;

const Panel: React.FC<PanelProps> = (props) => {
  const { codemarns, ...restProps } = props;
  return (
    <aside
      {...restProps}
      className={cn({ [codemarns + "__panel"]: codemarns }, styles.base)}
    >
      <div className={styles.header.base}>
        <span className={styles.header.title}>{`Panel`}</span>
      </div>

      <div className={cn("content-with-scroll", styles.content.base)}>
        <div className="flex-1 h-[1200px]">Coming Soon...</div>
      </div>
    </aside>
  );
};

export default Panel;
