import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconAperture,
  IconUsers, 
  IconChartBar,
  IconRobot 
 } from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  // {
  //   navlabel: true,
  //   subheader: 'Home',
  // },

  {
    id: uniqueId(),
    title: 'Inbox',
    icon: IconAperture,
    href: '/inbox',
    // chip: 'New',
    // chipColor: 'secondary',
  },
  {
    id: uniqueId(),
    title: 'Train your Bot',
    icon: IconRobot,
    href: '/trainyourbot',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Other',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Train your Bot',
  //   icon: IconBoxMultiple,
  //   href: '/menulevel/',
  //   // children: [
  //   //   {
  //   //     id: uniqueId(),
  //   //     title: 'Level 1',
  //   //     icon: IconPoint,
  //   //     href: '/l1',
  //   //   },
  //   //   {
  //   //     id: uniqueId(),
  //   //     title: 'Level 1.1',
  //   //     icon: IconPoint,
  //   //     href: '/l1.1',
  //   //     children: [
  //   //       {
  //   //         id: uniqueId(),
  //   //         title: 'Level 2',
  //   //         icon: IconPoint,
  //   //         href: '/l2',
  //   //       },
  //   //       {
  //   //         id: uniqueId(),
  //   //         title: 'Level 2.1',
  //   //         icon: IconPoint,
  //   //         href: '/l2.1',
  //   //         children: [
  //   //           {
  //   //             id: uniqueId(),
  //   //             title: 'Level 3',
  //   //             icon: IconPoint,
  //   //             href: '/l3',
  //   //           },
  //   //           {
  //   //             id: uniqueId(),
  //   //             title: 'Level 3.1',
  //   //             icon: IconPoint,
  //   //             href: '/l3.1',
  //   //           },
  //   //         ],
  //   //       },
  //   //     ],
  //   //   },
  //   // ],
  // },
  {
    id: uniqueId(),
    title: 'Analytics',
    icon: IconChartBar ,
    href: '/analytics',
  },
  {
    id: uniqueId(),
    title: 'Team',
    // subtitle: 'This is the sutitle',
    icon: IconUsers,
    href: '/team',
  },

  {
    id: uniqueId(),
    title: 'Connect',
    icon: IconAward,
    href: '/connect',
  },
  // {
  //   id: uniqueId(),
  //   title: 'Outlined',
  //   icon: IconMoodSmile,
  //   href: '/',
  //   chip: 'outline',
  //   variant: 'outlined',
  //   chipColor: 'primary',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'External Link',
  //   external: true,
  //   icon: IconStar,
  //   href: 'https://google.com',
  // },
];

export default Menuitems;
