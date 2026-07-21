export type ToggleMenuProps = {
 toggleMenu: () => void;
};

export type MobileMenuProps = ToggleMenuProps & {
  menuOpen: boolean;
};

