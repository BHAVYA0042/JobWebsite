import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import questions from './questionData';
import classes from "./faq.module.css";
const Faq = () => {
  return (
    <div className={classes.ask}>
    {questions.map((quest)=>{
      return(
        <Accordion className={classes.card}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{textStyle:'bold'}}>{`Q. ${quest.question}`}</Typography>
          </AccordionSummary>
          <AccordionDetails>
          {quest.subAnswer?
            <Typography>
              {quest.answer}
              {quest.subAnswer.map((sub)=>{
                return(<li>{sub}</li>)
              })}
            </Typography>: 
            <Typography>
              {quest.answer}
            </Typography>}
           
          </AccordionDetails>
        </Accordion>
      )
    })}
      
    </div>
  );
}


export default Faq;