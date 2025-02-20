import styles from './Styles/Dashboard.module.css'
import Sidebar from '../components/Sidebar';
import Relatar from './Relatar';


export default function Dashboard() {
  return (
    <div className={styles.containerDashboard}>

     <Sidebar></Sidebar>
     <Relatar></Relatar>

    </div>
  )
}

