import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Crea  ',
    //     path: '/overview/users',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/overview/revenue',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'CreateAgent',
    path: '/Creatagent',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Reports',
    //     path: '/reports/reports1',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'sub-nav'
    //   },
    //   {
    //     title: 'Reports 2',
    //     path: '/reports/reports2',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'sub-nav'
    //   },
    //   {
    //     title: 'Reports 3',
    //     path: '/reports/reports3',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'Rcs Check',
    path: '/Rcscheck',
    icon: <FaIcons.FaCartPlus />
  },
 
  {
    title: 'Campaign',
    path: '/Richcard',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'RichCard',
        path: '/Richcard',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Corousel',
        path: '/Corousel',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Text',
        path: '/text',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reports',
    path: '/Reports',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Billing',
    path: '/billing',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'FOQ',
    path: '/Faq',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Support',
    path: '/Support',
    icon: <IoIcons.IoMdHelpCircle />

  }
];
