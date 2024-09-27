import React, { act } from "react";
import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
} from "@testing-library/react";

import Menu from "./menu";
import MenuItem from "./menuitem";
import { IMenuProps, IMenuItemProps } from "./types";

const testProps: IMenuProps = {
  defaultIndex: "1",
  onSelect: jest.fn(),
  className: "test",
};

const testVerProps: IMenuProps = {
  defaultIndex: "0",
  mode: "vertical",
};
const generateMenu = (props: IMenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={"0"}>Tab1</MenuItem>
      <MenuItem index={"1"} disabled>
        Tab2Disabled
      </MenuItem>
      <MenuItem index={"2"}>test</MenuItem>
    </Menu>
  );
};

let wrapper: RenderResult;
let activeElement: HTMLElement;
let disabledElement: HTMLElement;
let menuElement: HTMLElement;
describe("测试menu与menuitem组件", () => {
  /** 有一些case可能都要取一些相同的元素 可能会写一些相同的逻辑 */
  /** 可以将通用的放入到beforeEach中执行 会在每个case开始前都会执行 */
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("Tab1");
    disabledElement = wrapper.getByText("Tab2Disabled");
  });

  it("提示默认属性是否正常展示class", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("lucky-menu test");
    expect(menuElement.getElementsByTagName("li").length).toEqual(3);
    expect(activeElement).toHaveClass("menu-item isActive");
    expect(disabledElement).toHaveClass("menu-item isDisabled");
  });

  it("点击之后是否正确触发 disabled onSelect", () => {
    const thirdItem = wrapper.getByText("test");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("isActive");
    expect(activeElement).not.toHaveClass("isActive");
    expect(testProps.onSelect).toHaveBeenCalledWith(2);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("isActive");
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  });

  it("传入vertical和horizontal是否正常展示", () => {
    cleanup();
    const wrapper = render(generateMenu(testVerProps));
    const menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("lucky-menu-vertical");
  });
});
