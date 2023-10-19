import React from "react";
import cn from "classnames";
import { Icon } from "../../../components";
import { homeStyles } from "../../../styles";

type Item = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

type Data = {
  title: string;
  items: Item[];
};

type WhatSetsUpApartProps = {
  data: Data;
};

const WhatSetsUpApart: React.FC<WhatSetsUpApartProps> = ({ data }) => {
  const {
    home: {
      section: { whatSetsUsApart },
    },
  } = homeStyles;

  return (
    <section id="what-sets-us-apart" className={whatSetsUsApart.base}>
      <span className={cn(
        whatSetsUsApart.title.base,
        whatSetsUsApart.title.dark,
        whatSetsUsApart.title.light,
      )}>{data.title}</span>

      <div className={whatSetsUsApart.items.base}>
        {data.items.map((item) => (
          <div
            key={item.id}
            className={cn(
              whatSetsUsApart.items.item.base,
              whatSetsUsApart.items.item.dark,
              whatSetsUsApart.items.item.light
            )}
          >
            <Icon path={item.icon} color="success" size="xl" />
            <span className={whatSetsUsApart.items.item.title.base}>
              {item.title}
            </span>
            <p className={whatSetsUsApart.items.item.description.base}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatSetsUpApart;
