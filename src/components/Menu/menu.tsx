import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { IMenuContext, IMenuItemProps, IMenuProps, MenuContext } from './types';

const Menu: FC<IMenuProps> = (props) => {
  const {
    mode = 'horizontal',
    theme,
    style,
    children,
    onSelect,
    className,
    defaultIndex = '0',
    defaultOpenSubMenus = [],
    ...restProps
  } = props || {};

  // 默认选中第一个
  const [currentActive, setCurrentActive] = useState(defaultIndex);

  const classes = classNames('lucky-menu', className, {
    'lucky-menu-vertical': mode === 'vertical',
    'lucky-menu-horizontal': mode !== 'vertical',
    'lucky-menu-dark': theme === 'dark',
  });

  const handleClick = (idx: string) => {
    setCurrentActive(idx);
    if (typeof onSelect === 'function' && onSelect) {
      onSelect(idx);
    }
  };

  // 需要传递给子组件的context
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>;
      // 判断子元素是否为MenuItem或者SubMenu
      // 如果是MenuItem或者SubMenu，则进行渲染
      // 否则，提示错误
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.warn(
          'Warning: [LuckyMenu] Menu can only contain `MenuItem` and `SubMenu` as children.',
        );
        return null;
      }
    });
  };

  return (
    <ul
      className={classes}
      style={style}
      data-testid="test-menu"
      {...restProps}
    >
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;
