import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionProps } from "./type";

const Transition: FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    unmountOnExit,
    appear,
    wrapper,
    ...resetProps
  } = props;
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      // 加appear属性表示 第一次可能会是打开的状态
      appear
      // 默认为false 是不会有子节点的 为true会动态添加对应的子节点 离开后会进行unmount
      unmountOnExit
      {...resetProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

export default Transition;
