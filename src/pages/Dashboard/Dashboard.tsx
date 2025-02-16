import React from 'react'
import styles from './Dashboard.module.css'
import Sidebar from '../../components/Sidebar';
import Relatar from '../../pages/Relatar/Relatar';


function Dashboard() {
  return (
    <div className={styles.containerDashboard}>

     <Sidebar></Sidebar>
     <Relatar></Relatar>

    </div>
  )
}

export default Dashboard;