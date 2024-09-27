import React, { CSSProperties, ReactNode } from "react";

export type SizeType = "small" | "middle" | "large" | number | undefined;

// 继承了 HTMLAttributes<HTMLDivElement> 类型，就可以传入各种 div 的属性和事件
export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
  // size 可以传单个值代表横竖间距，或者传一个数组，分别设置横竖间距
  size?: SizeType | [SizeType, SizeType];
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center" | "baseline";
  split?: ReactNode;
  wrap?: boolean;
}

// 间距大小
export const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};

// 其他样式
export const otherStyles: CSSProperties = {};

// 通过context透出一些属性给组件使用
export interface ConfigContextType {
  space?: {
    size?: SizeType;
  };
}

export const ConfigContext = React.createContext<ConfigContextType>({});
