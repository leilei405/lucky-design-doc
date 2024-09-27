import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { FC } from 'react';
import { IconProps } from './type';

library.add(fas);
const Icon: FC<IconProps> = (props) => {
  const { className, theme, ...resetProps } = props;

  const classes = classNames('lucky-icon', className, {
    [`icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon className={classes} {...resetProps} />;
};

export default Icon;

// install
// npm i --save @fortawesome/fontawesome-svg-core
// npm install @fortawesome/free-solid-svg-icons
