import React, { Fragment } from 'react';
import ResponsiveAppBar from './navbar';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div className='wrapper'>
      <Fragment>
        <ResponsiveAppBar />
        <main>{props.children}</main>
        <Link className="helpButton" to="/faqs">
          <Chip label="Help" sx={{
            backgroundColor:"rgb(57, 73, 86)",
            position:"fixed",
            right:"15px",
            bottom:"15px",
            color:"white",
            fontWeight:"600 !important",
            cursor:"pointer",
            padding:"5px"
          }}/>
        </Link>
        

      </Fragment>
    </div>
  );
};

export default Layout;