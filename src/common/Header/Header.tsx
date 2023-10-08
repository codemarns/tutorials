import React from "react";
import cn from "classnames";
import { CommonProps } from "../../types";
import { headerStyles as styles } from "./styles";

type HeaderProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;

const Header: React.FC<HeaderProps> = (props) => {
  const { codename } = props;
  return (
    <header className={cn({ [codename + "__header"]: codename }, styles.base)}>
      <div className={styles.logo.base}>
        <img
          alt="codemarns logo"
          src="/codemarns-logo.svg"
          className={styles.logo.img}
        />
        <h1 className={styles.logo.name.base}>
          <span className={styles.logo.name.code}>code</span>
          <span className={styles.logo.name.name}>marns</span>
        </h1>
      </div>

      <div className={styles.actions.base}>
        <div
          className={cn(
            styles.actions.item.base,
            styles.actions.item.color.success
          )}
        />
        <div
          className={cn(
            styles.actions.item.base,
            styles.actions.item.color.primary
          )}
        />
        <div
          className={cn(
            styles.actions.item.base,
            styles.actions.item.color.secondary
          )}
        >
          <img
            src="/codemarns-logo.svg"
            alt="codemarns profile"
            className="w-full h-full"
          />
          <span className="absolute -top-px -right-px w-3 h-3 bg-success-600 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
