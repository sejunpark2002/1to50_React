import React, { useState, useEffect, useRef } from "react";
import "./style.css"

function Timer() {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const record = useRef();
    record.current = timeElapsed;
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeElapsed(timeElapsed => timeElapsed + 30);
      }, 30);
      return () => {
        alert("Your Record :" + record.current / 1000);
        clearInterval(timer);
      };
    }, []);
    return (
      <div className="Timer-Container">
        <div className="Timer-Front">{Math.floor(timeElapsed / 1000)}:</div>
        <div className="Timer-Back">{(timeElapsed % 1000) / 10}</div>
      </div>
    );
  }

  export default Timer;