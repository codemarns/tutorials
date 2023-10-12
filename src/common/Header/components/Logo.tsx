import { Link } from "react-router-dom";
import codemarnsLogo from "/codemarns-logo.svg";
import { headerStyles } from "../../../styles";

const Logo = () => {
  const {
    header: { logo },
  } = headerStyles;

  return (
    <Link to={"/tutorials/"} className={logo.base}>
      <img alt="codemarns logo" src={codemarnsLogo} className={logo.img.base} />
      <h1 className={logo.name.base}>
        <span className={logo.name.span.code}>code</span>
        <span className={logo.name.span.marns}>marns</span>
      </h1>
    </Link>
  );
};

export default Logo;
