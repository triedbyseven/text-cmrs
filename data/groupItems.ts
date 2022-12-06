
type GroupStatus = 'active' | 'paused';

export interface GroupItem {
  id: string;
  name: string;
  lead: string;
  status: GroupStatus;
};

const groupItems: GroupItem[] = [
  {
    id: '01',
    name: 'Patients',
    lead: 'Claire Redfield',
    status: 'active'
  },
  {
    id: '02',
    name: 'Gamers',
    lead: 'Zack Flair',
    status: 'paused'
  }
];

export default groupItems;