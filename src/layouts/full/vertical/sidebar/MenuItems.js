import {
  IconTicket,
  IconBrandGoogleAnalytics,
  IconRobot,
  IconUsers,
  IconSend
 } from '@tabler/icons';
 
 import { uniqueId } from 'lodash';
 
 const Menuitems = [
  {
     id: uniqueId(),
     title: 'Tickets',
     icon: IconTicket, 
     href: '/',
  },
  {
     id: uniqueId(),
     title: 'Train your Bot',
     icon: IconRobot,
     href: '/trainyourbot',
  },
  {
     id: uniqueId(),
     title: 'Analytics',
     icon: IconBrandGoogleAnalytics, 
     href: '/analytics',
  },
  {
     id: uniqueId(),
     title: 'Team',
     icon: IconUsers,
     href: '/team',
  },
  {
     id: uniqueId(),
     title: 'Connect',
     icon: IconSend,
     href: '/connect',
  },
 ];
 
 export default Menuitems;
 