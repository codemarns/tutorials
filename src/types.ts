import React from "react";

export type CommonProps = {
  codename?: string;
};

export type MainProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;
