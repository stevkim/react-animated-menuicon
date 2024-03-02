import { useState } from "react";

export type TSizes = {
  [key: string]: string;
};

const sizes: TSizes = {
  sm: ".5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
};

export type OptionProps = {
  size?: string | undefined;
  type?: string | undefined;
  color?: string | undefined;
};

const useMenuIcon = ({
  size = "2rem",
  type = "base",
  color = "#00000",
}: OptionProps) => {
  const [open, setOpen] = useState(false);
  const options = {
    size: sizes[size] || "2rem",
    type: type || "base",
    color: CSS.supports("color", color) ? color : "#000000",
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  return { open, toggleMenu, options };
};

export default useMenuIcon;
