/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import cn from "classnames";
import { cardStyles as styles } from "./styles";

type Actions = {
  id: string;
  icon?: any;
  onClick?: () => void;
};

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  actions?: Actions[];
};

const Card: React.FC<CardProps> = (props) => {
  const {
    className,
    id = "cm-card",
    title,
    actions = [],
    children,
    ...restProps
  } = props;

  const COMPONENT_NAME = "cm-card";

  return (
    <div
      {...restProps}
      id={id}
      className={cn(COMPONENT_NAME, styles.base, className)}
    >
      {title || actions?.length > 0 ? (
        <div
          className={cn(
            { [COMPONENT_NAME + "__header"]: COMPONENT_NAME },
            styles.header.base
          )}
        >
          <span className={styles.header.title}>{title}</span>
          <div className={styles.header.actions.base}>
            {actions?.map((item, index) => (
              <div
                key={index}
                id={item.id}
                className={styles.header.actions.item}
              />
            ))}
          </div>
        </div>
      ) : null}

      {children && (
        <div
          className={cn(
            { [COMPONENT_NAME + "__content"]: COMPONENT_NAME },
            "content-with-scroll",
            title || actions?.length > 0 ? "h-[calc(100%-3rem)]" : "h-full",
            styles.content.base
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;
