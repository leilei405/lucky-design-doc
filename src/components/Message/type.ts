import { CSSProperties, ReactNode } from "react";

export type Position = "top" | "bottom";

export interface IMessageProps {
  id?: number;
  className?: string | string[];
  duration?: number;
  style?: CSSProperties;
  content: ReactNode;
  position?: Position;
}
