import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonSize = "large" | "small";

export type ButtonType =
  | "primary"
  | "default"
  | "danger"
  | "link"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "light"
  | "dark";

// Button 组件基本属性
interface BaseButtonProps {
  href?: string;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  children?: ReactNode;
}

// 我想使用type属性，但是它不能使用，所以这里定义一个类型
// 使用omit方法，把原生type属性去掉
// 因为我想使用type属性，但是它不能使用，所以这里定义一个类型
type NativeButtonPropsWithoutType = Omit<
  ButtonHTMLAttributes<HTMLElement>,
  "type"
> &
  BaseButtonProps;

// type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type NativeButtonProps = NativeButtonPropsWithoutType;

type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

// 合并两种类型的Props，我们使用Partial是因为你原始类型定义中使用了Partial
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
