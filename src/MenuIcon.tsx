import "./index.css";
import type { OptionProps } from "./useMenuIcon";

export interface MIconProps {
  open: boolean;
  toggleMenu: () => void;
  options: OptionProps;
}

const MenuIcon = ({ open, toggleMenu, options }: MIconProps) => {
  const { size, type, color } = options;

  return (
    <button onClick={toggleMenu} style={{ width: size }} className="menu-icon">
      {["first", "second", "third"].map((order) => {
        return (
          <div
            key={order}
            style={{ background: color }}
            className={`bar ${open ? type : ""}`}
          ></div>
        );
      })}
    </button>
  );
};

export default MenuIcon;
