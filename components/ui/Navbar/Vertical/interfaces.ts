export interface VerticalProps {
  menuItems: MenuItem[];
  selectedItem: number;
  selectItem: (index: number) => void;
};

export interface MenuItem {
  id: string;
  name: string;
  icon: React.FC;
};