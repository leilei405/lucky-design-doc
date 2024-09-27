import { ReactElement, ReactNode } from "react";

export interface TabsProps {
  defaultIndex?: number;
  className?: string;
  onSelect?: (selectedIndex: number) => void;
  type?: "line" | "card";
  children?: ReactNode;
}

export interface TabItemProps {
  label: string | ReactElement;
  disabled?: boolean;
  children?: ReactNode;
}
