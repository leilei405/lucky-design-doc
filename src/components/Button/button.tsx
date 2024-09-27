import classNames from 'classnames';
import React, { FC } from 'react';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = (props) => {
  const {
    type = 'default',
    className,
    disabled = false,
    size,
    children,
    href,
    ...restProps
  } = props;

  const classes = classNames('btn', className, {
    [`lucky-btn-${type}`]: type,
    [`lucky-btn-${size}`]: size,
    disabled: type === 'link' && disabled,
  });

  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button
        type="button"
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    );
  }
};

// 这种方式已被弃用，直接在组件内部props解构时候进行赋初始默认值
// Button.defaultProps = {
//   disabled: false,
//   type: "default",
// };
