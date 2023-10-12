import React from "react";
import { Link } from "react-router-dom";

type TNavProps = React.HTMLAttributes<HTMLDivElement>;

const Nav: React.FC<TNavProps> = (props) => {
  return (
    <nav {...props}>
      <ul>
        <li>
          <Link to={"/tutorials/button"}>Button</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
