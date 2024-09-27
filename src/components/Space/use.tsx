import React from "react";
import Space, { ConfigProvider } from "./space";
import "./c.scss";
import { Button } from "antd";
const SpaceCom = () => {
  return (
    <ConfigProvider space={{ size: 20 }}>
      <Space direction="horizontal">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
      </Space>
      <hr />
      <Space direction="horizontal">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
      </Space>
      <hr />
      <div style={{ width: 500 }}>
        <Space>
          <Button type="primary">批量操作1</Button>
          <Button type="primary">批量操作2</Button>
          <Button type="primary">批量操作3</Button>
        </Space>
      </div>
    </ConfigProvider>
  );
};
export default SpaceCom;
