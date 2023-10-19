import React from "react";
import cn from "classnames";
import { homeStyles } from "../../../styles";

type Data = {
  description: string;
};

type EndMessageProps = {
  data: Data;
};

const EndMessage: React.FC<EndMessageProps> = ({ data }) => {
  const {
    home: {
      section: { endMessage },
    },
  } = homeStyles;

  return (
    <section
      id="end-message"
      className={cn(endMessage.base, endMessage.dark, endMessage.light)}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23323945' fill-opacity='0.12'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <p className={endMessage.description.base}>{data.description}</p>
    </section>
  );
};

export default EndMessage;