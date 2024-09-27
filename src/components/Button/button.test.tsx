import React, { act } from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./button";
import { ButtonProps } from "./types";
const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  type: "primary",
  size: "large",
  className: "klass",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(), // 模拟点击按钮
};

describe("测试Button组件", () => {
  it("针对什么都不加的Button按钮", () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn lucky-btn-default");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("根据不同的props展示不同的组件", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("lucky-btn-primary lucky-btn-large klass");
  });
  it("当组件的type是link的时候，href被提供的时候，渲染出一个a标签", () => {
    const wrapper = render(
      <Button type="link" href="http://dummyurl">
        Link
      </Button>
    );
    const element = wrapper.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn lucky-btn-link");
  });
  it("当有disabled属性的时候，渲染disabled按钮", () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
