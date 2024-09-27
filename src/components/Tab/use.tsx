import React from "react";
import Tab from "./tab";
import TabItem from "./tab-item";

const TabCom = () => {
  return (
    <Tab type="card">
      <TabItem label={"tab1"}>1</TabItem>
      <TabItem label={"tab2"} disabled>
        2
      </TabItem>
      <TabItem label={"tab3"}>3</TabItem>
    </Tab>
  );
};
export default TabCom;
