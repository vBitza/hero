import React from 'react';
import { useNavigate } from 'react-router-dom'

import Home from './pages/Home/Home';
import HeroesTable from './pages/Heroes/Heroes';

import './styles.css';
import AppDrawer from './components/Drawer';
import Icon from "@mdi/react";
import {
  mdiFormTextboxPassword,
  mdiInformationSlabBoxOutline,
} from "@mdi/js";


const activePage = (route) => {
  console.log('route', route);
  switch (route) {
    case 'superheroes':
      return <HeroesTable/>;
    default:
      return <Home/>;
  }
};

function App({ route }) {
  const navigate = useNavigate();

  const drawerItems = [
    {
      name: 'Home',
      icon: <Icon path={mdiInformationSlabBoxOutline} size={1}/>,
      action: () => navigate('/'),
    },
    {
      name: 'Superheroes',
      icon: <Icon path={mdiFormTextboxPassword} size={1}/>,
      action: () => navigate('/superheroes'),
    },
  ];

  return (
    <div className="container">
      <AppDrawer
        items={drawerItems}
        content={activePage(route)}
      />
    </div>
  );
}


export default App;
