import React, {
  FC,
  useState,
  FunctionComponentElement,
  MouseEvent,
} from "react";
import classNames from "classnames";
import { TabItemProps, TabsProps } from "./type";

export const Tabs: FC<TabsProps> = (props) => {
  const {
    defaultIndex = 0,
    className,
    onSelect,
    children,
    type = "line",
  } = props;

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleClick = (
    e: MouseEvent,
    index: number,
    disabled: boolean | undefined
  ) => {
    if (!disabled) {
      setActiveIndex(index);
      if (onSelect) {
        onSelect(index);
      }
    }
  };

  const navClass = classNames("lucky-tabs-nav", {
    "nav-line": type === "line",
    "nav-card": type === "card",
  });

  const renderNavLinks = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>;
      const { label, disabled } = childElement.props;

      const classes = classNames("lucky-tabs-nav-item", {
        isActive: activeIndex === index,
        disabled: disabled,
      });
      return (
        <li
          className={classes}
          key={`nav-item-${index}`}
          onClick={(e) => {
            handleClick(e, index, disabled);
          }}
        >
          {label}
        </li>
      );
    });
  };

  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child;
      }
    });
  };

  return (
    <div className={`lucky-tabs ${className}`}>
      <ul className={navClass}>{renderNavLinks()}</ul>
      <div className="lucky-tabs-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
