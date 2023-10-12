import React, { Dispatch, SetStateAction } from "react";

export type CommonProps = {
  codename?: string;
  theme?: string | null;
  setTheme?: Dispatch<SetStateAction<string | null>>;
};

export type MainProps = React.HTMLAttributes<HTMLDivElement> & CommonProps;
