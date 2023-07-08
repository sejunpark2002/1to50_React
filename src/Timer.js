import React, { useState, useEffect, useRef } from "react";
import "./style.css"


function Timer({gameFlag,showResult}) {
    const [timeElapsed, setTimeElapsed] = useState(0);
    // const [time, setTime] = useState(0);
    const record = useRef();
    record.current = timeElapsed;

    useEffect(() => {
   
     let timer;

      if (gameFlag){
        timer = setInterval(() => {
          setTimeElapsed(timeElapsed + 1);
        }, 10);

      }
        return () => {
          // alert("Your Record :" + record.current / 1000);
          clearInterval(timer);
          showResult(record.current/1000)
        }
        
    }, [gameFlag,timeElapsed]);

    const minutes = Math.floor((timeElapsed % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((timeElapsed % 6000) / 100);
  
    // Milliseconds calculation
    const milliseconds = timeElapsed % 100;

    return (
     <div >
      
      
        { <div className="Timer-Container">
          <div className="Timer-Minute">{minutes.toString().padStart(2, "0")}:</div>
          <div className="Timer-Front">{seconds.toString().padStart(2, "0")}:</div>
          <div className="Timer-Back"> {milliseconds.toString().padStart(2, "0")}</div>
        </div> }

     
    </div>
     
    );
  }

  export default Timer;
