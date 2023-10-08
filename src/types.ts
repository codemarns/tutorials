import React from "react";

export type CommonProps = {
  codemarns?: string;
};

export type MainProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;
