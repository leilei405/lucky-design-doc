import Menu from "./menu";
import SubMenu from "./submenu";
import MenuItem from "./menuitem";

const MenuCom = () => {
  const handleClick1 = (idx: string | number) => {
    console.log("currentIndex", idx);
  };
  return (
    <Menu
      mode="vertical"
      defaultIndex="0"
      onSelect={(idx) => handleClick1(idx)}
      defaultOpenSubMenus={["4"]}
    >
      <MenuItem>Tab1</MenuItem>
      <MenuItem>Tab2</MenuItem>
      <MenuItem>Tab3</MenuItem>
      <MenuItem disabled>Tab4</MenuItem>
      <SubMenu title="Tab5">
        <MenuItem>Tab5-1</MenuItem>
        <MenuItem>Tab5-2</MenuItem>
      </SubMenu>
    </Menu>
  );
};

export default MenuCom;
