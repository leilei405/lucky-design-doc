import { FC } from "react";
import { TabItemProps } from "./type";

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return <div className="lucky-tab-panel">{children}</div>;
};

export default TabItem;
