import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PatternOutlinedIcon from '@mui/icons-material/PatternOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../pages/context/darkModeContext';


const Sidebar = () => {

    // Setting darkmode on sidebar
    const{dispatch} = useContext(DarkModeContext)


    return(
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">BahdAdmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    
                        <Link to="/users" style={{textDecoration: "none"}}>
                            <li>
                                <GroupAddOutlinedIcon className='icon' />
                                <span>Users</span>  
                            </li>
                        </Link>
                    
                    <Link to="/products" style={{textDecoration: "none"}}>
                        <li>
                            <ProductionQuantityLimitsIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <Inventory2Icon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL LINKS</p>
                    <li>
                        <QueryStatsIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationAddIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <MonitorHeartIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PatternOutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" 
                    onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" 
                    onClick={()=> dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar