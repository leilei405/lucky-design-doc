import InternalMenu from "./menu";
import MenuItem from "./menuitem";

type InternalMenuType = typeof InternalMenu;

interface IMenuInterface extends InternalMenuType {
  Item: typeof MenuItem;
}

const Menu = InternalMenu as IMenuInterface;

Menu.Item = MenuItem;

export default Menu;
