import React, { useState, useEffect, useRef } from "react";
import "./style.css"


function Timer({gameFlag}) {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const record = useRef();
    record.current = timeElapsed;
    
    useEffect(() => {
   
      if (gameFlag) {
       
        const timer = setInterval(() => {
          setTimeElapsed(timeElapsed => timeElapsed + 30);
        }, 30);
      }
    

      // return () => {
      //   alert("Your Record :" + record.current / 1000);
      //   clearInterval(timer);
      // };
    }, [gameFlag]);

    return (
      <div >
    {gameFlag ? (
     
      <div className="Timer-Container">
        <div className="Timer-Front">{Math.floor(timeElapsed / 1000)}:</div>
        <div className="Timer-Back">{(timeElapsed % 1000) / 10}</div>
      </div>
    ) : (
     
      <div className="Timer-Container">
        <div className="Timer-Front">00:</div>
        <div className="Timer-Back">00</div>
      </div>
    )}
  </div>

     
    );
  }

  export default Timer;