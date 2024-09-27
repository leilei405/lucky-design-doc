import { createContext, CSSProperties, ReactNode } from 'react';

/** 菜单模式 vertical | horizontal */
type MenuMode = 'vertical' | 'horizontal';
/** 菜单主题 light | dark */
type MenuTheme = 'light' | 'dark';
/** SelectCallback */
type SelectCallback = (selectedIndex: string) => void;

/** MenuContext 将父组件的一些属性透传给子组件 */
export interface IMenuContext {
  index?: number | string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: Array<string>;
}

/** 给Menu组件添加一个context，用于给子组件传递index和onSelect 默认给选中第一项 */
export const MenuContext = createContext<IMenuContext>({ index: '0' });

/** Menu Component Properties */
export interface IMenuProps {
  mode?: MenuMode;
  theme?: MenuTheme;
  className?: string;
  style?: CSSProperties;
  defaultIndex?: string;
  children?: ReactNode;
  onSelect?: SelectCallback;

  // 默认展开的菜单项
  defaultOpenSubMenus?: Array<string>;
}

/** Menu.Item Component Properties */
export interface IMenuItemProps {
  index?: string;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  children: ReactNode;
}

/** SubMenu Components Properties */
export interface ISubMenuProps {
  title: ReactNode; // 标题自定义
  index?: string; // 默认选中第一项
  className?: string;
  children?: ReactNode;
}
