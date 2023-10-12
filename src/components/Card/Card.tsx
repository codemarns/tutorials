import React, { ReactElement } from "react";
import cn from "classnames";
import { cardStyles } from "../../styles";
// import { cardStyles as styles } from "./styles";

type Actions = {
  id: string;
  icon?: ReactElement;
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

  const { card } = cardStyles;
  return (
    <div
      {...restProps}
      id={id}
      className={cn(COMPONENT_NAME, card.base, className)}
    >
      {title || actions?.length > 0 ? (
        <div
          className={cn(
            { [COMPONENT_NAME + "__header"]: COMPONENT_NAME },
            card.header.base
          )}
        >
          <span className={card.header.title.base}>{title}</span>
          <div className={card.header.actions.base}>
            {actions?.map((item, index) => (
              <div
                key={index}
                id={item.id}
                className={card.header.actions.item.base}
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
            card.content.base
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;
