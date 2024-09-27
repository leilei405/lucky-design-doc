import { ReactNode } from "react";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-bottom"
  | "zoom-in-right";

export type TransitionProps = {
  animation?: AnimationName;
  children: ReactNode;
  wrapper?: boolean;
} & CSSTransitionProps;
