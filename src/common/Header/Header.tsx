import React, { useContext } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import codemarnsLogo from "/codemarns-logo.svg";
import { Messages, Notification, Settings } from "./components";
import { headerStyles as styles } from "./styles";
import { Context } from "../../App";

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

const Header: React.FC<HeaderProps> = (props) => {
  const { codename } = useContext(Context);

  const baseClasses = cn({ [codename + "__header"]: codename }, styles.base);

  return (
    <header {...props} className={baseClasses}>
      <Link to={"/tutorials/"} className={styles.logo.base}>
        <img
          alt="codemarns logo"
          src={codemarnsLogo}
          className={styles.logo.img}
        />
        <h1 className={styles.logo.name.base}>
          <span className={styles.logo.name.code}>code</span>
          <span className={styles.logo.name.name}>marns</span>
        </h1>
      </Link>

      <div className={styles.actions.base}>
        <Messages />
        <Notification />
        <Settings />
      </div>
    </header>
  );
};

export default Header;
