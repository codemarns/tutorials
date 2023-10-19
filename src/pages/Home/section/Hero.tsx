import React from "react";
import cn from "classnames";
import { homeStyles } from "../../../styles";

type HeroProps = {
  logo: string;
};

const Hero: React.FC<HeroProps> = ({ logo }) => {
  const {
    home: {
      section: { hero },
    },
  } = homeStyles;

  return (
    <section id="hero" className={cn(hero.base, hero.dark, hero.light)}>
      <img alt="codemarns logo" src={logo} className={hero.img.base} />
    </section>
  );
};

export default Hero;
