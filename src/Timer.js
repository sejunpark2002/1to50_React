import React, { useState, useEffect, useRef } from "react";
import "./style.css"


function Timer({gameFlag,showResult,gameOver}) {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const record = useRef();
    record.current = timeElapsed;
    


    const minutes = Math.floor((record.current % 360000) / 6000);
    const seconds = Math.floor((record.current % 6000) / 100);
    const milliseconds = record.current % 100;

    const minStrig = minutes.toString().padStart(2, "0");
    const secString = seconds.toString().padStart(2, "0");
    const millisecString = milliseconds.toString().padStart(2, "0");


    useEffect(() => {
   
     let timer;

      if (gameFlag){
        timer = setInterval(() => {
          setTimeElapsed(timeElapsed + 1);
        }, 10);

      }
        return () => {
  
          clearInterval(timer);
          showResult(minStrig+":"+secString+":"+millisecString)
        }
        
    }, [gameFlag,timeElapsed]);

    

    return (
     <div >
      
      
        { <div className={gameOver? '' : 'Timer-Container'}>
          <div className="Timer-Minute">{minStrig}:</div>
          <div className="Timer-Front">{secString}:</div>
          <div className="Timer-Back"> {millisecString}</div>
        </div> }

     
    </div>
     
    );
  }

  export default Timer;
