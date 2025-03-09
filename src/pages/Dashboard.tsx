import { Routes, Route, Link } from "react-router-dom";
import Relatar from "./Relatar"; 
import News from "./News";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
        </div>
    );
};

export default Dashboard;




