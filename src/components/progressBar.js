import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import classes from "./dashboard.module.css"
function StepProgressBar(props)  {

    return (
      <div className={classes.line}> 
        <ProgressBar
        percent={props.percent}
        fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        width="60%"
        height="13px"
      >
        <Step transition="scale" transitionDuration="1000">
          {({ accomplished }) => (
            <div className={classes.marker}>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="20px"
              src="https://www.clipartmax.com/png/full/232-2326578_green-dot-clip-art-at-clker-green-dot-clipart.png"
              alt=""
            />
            <h3 className={classes.labels}>Applied</h3>  
            </div>
            
            
          )}
        </Step>
        <Step transition="scale" transitionDuration="1000">
          {({ accomplished }) => (
            <div className={classes.marker}>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="20px"
              src="https://www.clipartmax.com/png/full/232-2326578_green-dot-clip-art-at-clker-green-dot-clipart.png"
              alt=""
            />
            <h3 className={classes.labels}>Accepted</h3>  
            </div>
          )}
        </Step>
        <Step transition="scale" transitionDuration="1000">
          {({ accomplished }) => (
            <div className={classes.marker}>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="20px"
              src="https://www.clipartmax.com/png/full/232-2326578_green-dot-clip-art-at-clker-green-dot-clipart.png"
              alt=""
            />
            <h3 className={classes.labels}>Interview</h3>  
            </div>
          )}
        </Step>
        <Step transition="scale" transitionDuration="1000">
          {({ accomplished }) => (
            <div className={classes.marker}>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="20px"
              src="https://www.clipartmax.com/png/full/232-2326578_green-dot-clip-art-at-clker-green-dot-clipart.png"
              alt=""
            />
            <h3 className={classes.labels}>Result</h3>  
            </div>
          )}
        </Step>
      </ProgressBar>
      </div>
      
    );
  }

  export default StepProgressBar;