import React, { FC, useContext } from "react";
import classNames from "classnames";
import { IMenuItemProps, MenuContext } from "./types";

const MenuItem: FC<IMenuItemProps> = (props) => {
  const context = useContext(MenuContext);

  const { index, className, style, disabled, children } = props || {};

  const classes = classNames("menu-item", className, {
    isDisabled: disabled,
    isActive: context.index === index,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === "string") {
      context.onSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};
// displayName 用于在 React DevTools 中显示组件名称 内置的静态类型
MenuItem.displayName = "MenuItem";
export default MenuItem;
