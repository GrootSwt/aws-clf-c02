export type MenuItem = {
  title: string;
  links: Array<string>;
};

export type MenuItemInfo = {
  dirIndex: string;
  fileIndex: string;
  title: string;
  filename: string;
};

export type Menu = Array<MenuItem>;
