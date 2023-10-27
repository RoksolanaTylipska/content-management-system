import React from 'react';
import { Outlet } from 'react-router';
import './TabsItem.css'

function TabItem ({ tab }) {
  return (
    <div className='tab-item'>
      <h2 className='tab-item-title'>Here you can see {tab.title}</h2>
      <Outlet />
    </div>
  )
};

export default TabItem;