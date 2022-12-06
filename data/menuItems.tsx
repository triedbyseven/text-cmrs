import Icons from '../components/ui/Icons';
import { MenuItem } from '../components/ui/Navbar/Vertical/interfaces';

const menuItems: MenuItem[] = [
  {
    id: '01',
    name: 'Groups',
    icon: () => <Icons.Stack3D />
  },
  {
    id: '02',
    name: 'Draft',
    icon: () => <Icons.Stack3D />
  },
  {
    id: '03',
    name: 'Starred',
    icon: () => <Icons.Stack3D />
  },
  {
    id: '04',
    name: 'Sent',
    icon: () => <Icons.Stack3D />
  },
  {
    id: '05',
    name: 'Trash',
    icon: () => <Icons.Stack3D />
  },
  {
    id: '06',
    name: 'Spam',
    icon: () => <Icons.Stack3D />
  }
];

export default menuItems;