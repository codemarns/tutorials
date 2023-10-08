import React, { useContext } from "react";
import cn from "classnames";
import codemarnsLogo from "/codemarns-logo.svg";
import { headerStyles as styles } from "./styles";
import { Context } from "../../App";

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

const Header: React.FC<HeaderProps> = (props) => {
  const { codename } = useContext(Context);
  return (
    <header
      {...props}
      className={cn({ [codename + "__header"]: codename }, styles.base)}
    >
      <div className={styles.logo.base}>
        <img
          alt="codemarns logo"
          src={codemarnsLogo}
          className={styles.logo.img}
        />
        <h1 className={styles.logo.name.base}>
          <span className={styles.logo.name.code}>code</span>
          <span className={styles.logo.name.name}>marns</span>
        </h1>
      </div>

      <div className={styles.actions.base}>
        <div className={styles.actions.item} />
        <div className={styles.actions.item} />
        <div className={styles.actions.item}>
          <img
            src={codemarnsLogo}
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
