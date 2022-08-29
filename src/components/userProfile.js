import React ,{useEffect}from 'react';
import classes from "./userProfile.module.css";
import { NavLink,Outlet,Link,useNavigate} from 'react-router-dom';
import {PersonOutlined,BusinessCenterOutlined,MessageOutlined,LogoutOutlined} from '@mui/icons-material';

const Profile = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    navigate("dashboard")
  },[])
  return (
    <div className={classes.profile}>
      <div className={classes.left}>

        <div className={classes.tabs}>
          <NavLink to="account" className={(nav)=>nav.isActive ? classes.active : classes.inactive}>
            <PersonOutlined sx={{width:"30px",height:"30px"}}/>
            <p>Account</p>
          </NavLink>

          <NavLink to="dashboard" className={(nav)=>nav.isActive ? classes.active : classes.inactive}>
            <BusinessCenterOutlined sx={{width:"30px",height:"30px"}}/>
            <p>Applied</p>
          </NavLink>
          <NavLink to="message" className={(nav)=>nav.isActive ? classes.active : classes.inactive}>
            <MessageOutlined sx={{width:"30px",height:"30px"}}/>
            <p>Messages</p>
          </NavLink>
          <Link to="/">
          <LogoutOutlined sx={{width:"30px",height:"30px"}}/>
            <p>Sign Out</p>
          </Link>
        </div>
      </div>
      
      <div className={classes.right}>
        <Outlet />
      </div>
      
    </div>
  );
};

export default Profile;