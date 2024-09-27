import React, {
  FC,
  useContext,
  useState,
  MouseEvent,
  FunctionComponentElement,
  cloneElement,
} from "react";
import classNames from "classnames";
import { ISubMenuProps, MenuContext, IMenuItemProps } from "./types";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";

const SubMenu: FC<ISubMenuProps> = (props) => {
  const { title, index, className, children } = props;
  // const { index, mode, defaultOpenSubMenus } = useContext(MenuContext);
  const context = useContext(MenuContext);

  // 子项默认展开
  const openDefaultMenu = context.defaultOpenSubMenus as Array<string | number>; // 可能是undefined的 做一个类型断言

  const isOpened =
    index && context.mode === "vertical"
      ? openDefaultMenu.includes(index)
      : false;

  const [menuOpen, setMenuOpen] = useState(isOpened);

  // 定时器 为了让鼠标滑出下拉更加平滑
  let timer: any;

  const classes = classNames("menu-item submenu-item", className, {
    isActive: context.index === index,
    isOpened: menuOpen,
    isVertical: context.mode === "vertical",
  });

  const handleMouse = (e: MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const clickEvents =
    context.mode === "vertical" ? { onClick: handleClick } : {};
  const hoverEvents = context.mode !== "vertical" && {
    onMouseEnter: (e: MouseEvent) => {
      handleMouse(e, true);
    },
    onMouseLeave: (e: MouseEvent) => {
      handleMouse(e, false);
    },
  };

  const renderChildren = () => {
    const subMenuClasses = classNames("lucky-submenu", {
      "menu-opened": menuOpen,
    });

    const childrenElement = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.warn("submenu only accept MenuItem as children");
        return null;
      }
    });

    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className={subMenuClasses}>{childrenElement}</ul>
      </Transition>
    );
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon={"angle-down"} className={"arrow-icon"} />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
