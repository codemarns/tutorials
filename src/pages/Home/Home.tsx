// import React from "react";
import { Container } from "../../common";
import { EndMessage, Hero, Welcome, WhatSetsUpApart } from "./section";
import { homeStyles } from "../../styles";
import { data } from "./data";

const Home = () => {
  const {
    home: { base },
  } = homeStyles;

  const { logo, welcome, what_sets_up_apart, endMessage } = data || {};

  return (
    <Container>
      <div className={base}>
        <Hero logo={logo} />
        <Welcome data={welcome} />
        <WhatSetsUpApart data={what_sets_up_apart} />
        <EndMessage data={endMessage} />
      </div>
    </Container>
  );
};

export default Home;
