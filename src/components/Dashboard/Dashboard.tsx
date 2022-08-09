import React from 'react';
import Menu from 'components/Menu';
import Items from 'components/Items';
import History from 'components/History';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles['dashboard']}>
      <Menu />
      <Items />
      <History />
    </div>
  );
};

export default Dashboard;
