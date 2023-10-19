import React from "react";
import cn from "classnames";

const iconStyles = {
  root: {
    base: "",
    size: {
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-10 h-10",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      info: "text-info",
      success: "text-success",
      default: "text-default",
      black: "text-black",
      white: "text-white",
    },
  },
};

export type IconProps = {
  className?: string;
  path: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "default"
    | "black"
    | "white";
};

const Icon: React.FC<IconProps> = (props) => {
  const {
    className,
    path = "",
    size: propSize = "md",
    color: propColor = "default",
  } = props;

  const {
    root: { base, size, color },
  } = iconStyles;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cn(base, size[propSize], color[propColor], className)}
    >
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Icon;
