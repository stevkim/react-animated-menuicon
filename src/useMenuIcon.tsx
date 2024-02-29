import { useState } from "react";

type TSizes = {
  [key: string]: string;
};

const sizes: TSizes = {
  sm: "1rem",
  md: "2rem",
  lg: "3rem",
  xl: "5rem",
};

export type OptionProps = {
  size: string | undefined;
  type: string | undefined;
  color: string | undefined;
};

export interface Props {
  size?: string;
  type?: string;
  color?: string;
}

const useMenuIcon = ({
  size = "2rem",
  type = "base",
  color = "#00000",
}: Props) => {
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
