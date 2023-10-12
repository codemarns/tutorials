import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const NotFound: React.FC<Props> = (props) => {
  return <div {...props}>Not Found</div>;
};

export default NotFound;
