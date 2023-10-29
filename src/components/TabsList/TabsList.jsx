import React, { useEffect, useState } from 'react';
import './TabsList.css'
import tabs from '../../api/tabs.json';
import { NavLink, useLocation } from 'react-router-dom';
import TabItem from '../TabsItem/TabsItem.jsx';

function TabsList() {
  const [sortedTabs, setSortedTabs] = useState([])
  const [activeTab, setIsActive] = useState(tabs[0])
  const location = useLocation();

  useEffect(() => {
    let sortedTabs = tabs.sort((tabA, tabB) => tabA.order - tabB.order);
    setSortedTabs(sortedTabs);

    const activeTab = tabs.find((tab) => location.pathname.includes(tab.path));
    setIsActive(activeTab || tabs[0]);
  }, [location, tabs]);

  return (
    <div className='tabs-list'>
      <nav className='tabs-list-container'>
        <h2 className='tabs-list-title'>Tabs</h2>
        <ul className='tabs-list-items'>
          {sortedTabs.map((tab) => (
            <li
              key={tab.id}
              className={'tabs-list-item'}
            >
              <NavLink
                to={`/${tab.path}`}
                className={'tabs-list-item-link'}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>


      <div style={{ padding: '40px', width: '70%' }}>
        <React.Suspense>
          <TabItem tab={activeTab} />
        </React.Suspense>
      </div>

    </div>
  );
}

export default TabsList;

