import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Calculator',
    path: '/calc',
    icon: <IoIcons.IoIosCalculator />,
    cName: 'nav-text'
  },
  {
    title: 'To do list',
    path: '/todo',
    icon: <AiIcons.AiFillWallet/>,
    cName: 'nav-text'
  },
  {
    title: 'Table',
    path: '/table',
    icon: <AiIcons.AiOutlineTable />,
    cName: 'nav-text'
  },
  {
    title: 'List Users',
    path: '/list',
    icon: <AiIcons.AiOutlineUserSwitch/>,
    cName: 'nav-text'
  }
];