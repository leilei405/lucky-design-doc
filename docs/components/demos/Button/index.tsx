import React from 'react';
import { Button } from '../../../../src';
export default () => {
  return (
    <>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="secondary">次要按钮</Button>
      <Button type="link">链接按钮</Button>
    </>
  );
};
