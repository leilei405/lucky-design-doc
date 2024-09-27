import React, { FC, useState } from "react";
import { IMessageProps } from "./type";

const MessageProvider: FC<IMessageProps> = (props) => {
  const { style, className, content, duration, id, position } = props;
  return <div>1</div>;
};

export default MessageProvider;
