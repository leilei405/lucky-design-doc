import Menu from "./menu";
import SubMenu from "./submenu";
import MenuItem from "./menuitem";

const MenuCom = () => {
  const handleClick2 = (idx: string | number) => {
    console.log("currentIndex", idx);
  };
  return (
    <Menu
      defaultIndex="0"
      mode="horizontal"
      onSelect={(idx) => handleClick2(idx)}
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
