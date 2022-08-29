import React from 'react';
import JobBox from './jobBox';
import data from './companyData';
import classes from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      {data.map(job=>{
        return(
          <JobBox
            name={job.name}
            location={job.location}
            profile={job.profile}
            status={job.status}
            mode={job.mode}
            image={job.logo}
            percent={job.completion}
          />
        )
      })}
    </div>
  );
};

export default Dashboard;