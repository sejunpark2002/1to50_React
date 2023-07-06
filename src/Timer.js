import React, { useState, useEffect, useRef } from "react";
import "./style.css"


function Timer({gameFlag,timeElapsed}) {
    // const [timeElapsed, setTimeElapsed] = useState(0);
    // const record = useRef();
    // record.current = timeElapsed;

 

    // useEffect(() => {
   
    
       
    //     const timer = setInterval(() => {
    //       setTimeElapsed(timeElapsed => timeElapsed + 30);
    //     }, 30);

    //     return () => {
         
    //       clearInterval(timer);
    //     };
      

    // }, []);

    return (
     <div >
      
      
        <div className="Timer-Container">
          {/* <div className="Timer-Minute">{Math.floor(timeElapsed / 1000)/60}:</div> */}
          <div className="Timer-Front">{Math.floor(timeElapsed / 1000)}:</div>
          <div className="Timer-Back">{(timeElapsed % 1000) / 10}</div>
        </div>
     
    </div>
     
    );
  }

  export default Timer;

 