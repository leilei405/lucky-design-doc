import React from "react";
// import { config } from "react-transition-group";
import { render, fireEvent } from "@testing-library/react";

import Alert from "./alert";
import { AlertProps } from "./types";

// config.disabled = true;

// jest.mock("../Icon/icon", () => {
//   return (props: any) => {
//     return <span>{props.icon}</span>;
//   };
// });

const testProps: AlertProps = {
  title: "title",
  onClose: jest.fn(),
};

const typeProps: AlertProps = {
  ...testProps,
  type: "success",
  description: "hello",
  closable: false,
};

describe("测试Alert组件", () => {
  it("测试默认的Alert组件", () => {
    const { getByText, container, queryByText } = render(
      <Alert {...testProps} />
    );
    expect(queryByText("title")).toBeInTheDocument();
    expect(container.querySelector(".lucky-alert")).toHaveClass(
      "lucky-alert-default"
    );
    fireEvent.click(getByText("times"));
    expect(testProps.onClose).toHaveBeenCalled();
    expect(queryByText("title")).not.toBeInTheDocument();
  });
  it("根据不同的类型和描述呈现正确的警报", () => {
    const { container, queryByText } = render(<Alert {...typeProps} />);
    expect(queryByText("title")).toHaveClass("bold-title");
    expect(container.querySelector(".lucky-alert")).toHaveClass(
      "lucky-alert-success"
    );
    expect(queryByText("hello")).toBeInTheDocument();
    expect(queryByText("times")).not.toBeInTheDocument();
  });
});
