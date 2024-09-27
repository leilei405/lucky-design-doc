import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "./icon";

library.add(fas);

const IconCom = () => {
  return (
    <div>
      <Icon icon={"coffee"} theme="success" size="10x" />
      <Icon icon={"arrow-down"} theme="primary" size="10x" />
    </div>
  );
};

export default IconCom;
