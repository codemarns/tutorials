import React from "react";
import cn from "classnames";
import { homeStyles } from "../../../styles";

type Item = {
  id: string;
  description: string;
};

type Data = {
  title: string;
  items: Item[];
};

type WelcomeProps = {
  data: Data;
};

const Welcome: React.FC<WelcomeProps> = (props) => {
  const { data } = props;

  const {
    home: {
      section: { welcome },
    },
  } = homeStyles;

  return (
    <section id="welcome" className={welcome.base}>
      <span
        className={cn(
          welcome.title.base,
          welcome.title.dark,
          welcome.title.light
        )}
      >
        {data.title}
      </span>
      {data.items.map((item) => (
        <p key={item.id}>{item.description}</p>
      ))}
    </section>
  );
};

export default Welcome;
