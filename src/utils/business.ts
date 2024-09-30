import { Menu, MenuItemInfo } from "@/types/menu";

export function getMenuItemInfoList(menu: Menu) {
  const result: Array<MenuItemInfo> = [];
  menu.forEach((menuItem) => {
    const title = menuItem.title;
    const dirIndex = title.substring(0, 2);
    menuItem.links.forEach((filename) => {
      const fileIndex = filename.substring(0, 2);
      result.push({
        dirIndex,
        fileIndex,
        title,
        filename
      });
    });
  });
  return result;
}
