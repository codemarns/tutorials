import React, { useContext } from "react";
import cn from "classnames";
import { Context } from "../../App";
import { Dark, Light, Logo, System } from "./components";
import { headerStyles } from "../../styles";

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

const Header: React.FC<HeaderProps> = (props) => {
  const { codename, setTheme } = useContext(Context);

  const elements = [
    {
      id: "light",
      icon: <Light />,
    },
    {
      id: "dark",
      icon: <Dark />,
    },
    {
      id: "system",
      icon: <System />,
    },
  ];

  const {
    header: { base, actions },
  } = headerStyles;

  const baseClasses = cn({ [codename + "__header"]: codename }, base);

  return (
    <header {...props} className={baseClasses}>
      <Logo />

      <div className={actions.base}>
        {elements.map((element) => (
          <button
            key={element.id}
            onClick={() => setTheme!(element.id)}
            className={actions.element.base}
          >
            {element.icon}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
