import React, { useEffect } from 'react';
import { useState } from 'react';
import classes from "./dashboard.module.css";
import StepProgressBar from "./progressBar";
const JobBox = (props) => {
  const [pending, setPending]=useState(false);
  useEffect(()=>{
    if(props.status==="Pending" || props.status==="Not Selected" ){
      setPending(true)
    }
  },[props.status])
  return (
    
    <fieldset className={classes.box}>
      <legend>{props.mode}</legend>
    
      <div className={classes.content}>
        <section className={classes.intro}>
          <img src={props.image} alt={props.name} />

          <section className={classes.vertical}>
            <h3>{props.profile}</h3>

            <section className={classes.address}>
              <p>{props.name}</p>
              <p className={classes.vertical}>|</p>
              <p>{props.location}</p>
            </section>

          </section>
        </section>
      </div>
      <section className={classes.status}>
        {pending?
          <div className={classes.orangeDot}></div>:
          <div className={classes.greenDot}></div>
        }
        <b>{props.status}</b>
      </section> 
      <div className={classes.bar}>
        <StepProgressBar 
        key={props.id}
        percent={props.percent}/>
      </div>
      
    </fieldset>
  );
};

export default JobBox;