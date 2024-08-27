import React, { useState, useEffect, useRef } from "react";
import "./style.css";

function Timer({ gameFlag, recordResult, gameOver }) {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [gameRecords, setGameRecords] = useState(() => {
    // Retrieve the initial game records from localStorage
    const storedRecords = JSON.parse(window.localStorage.getItem('gameRecords'));
    return storedRecords || [];
  });
  
  
  function addGameRecord(newRecord) {
    setGameRecords(prevRecords => {
      const updatedRecords = [...prevRecords, newRecord];
      console.log('Updated Records:', updatedRecords);
      window.localStorage.setItem('gameRecords', JSON.stringify(updatedRecords));
      return updatedRecords; // Return the updated records to update the state
    });
  }


  const record = useRef();
  record.current = timeElapsed;

  const minutes = Math.floor((record.current % 360000) / 6000);
  const seconds = Math.floor((record.current % 6000) / 100);
  const milliseconds = record.current % 100;

  const minStrig = minutes.toString().padStart(2, "0");
  const secString = seconds.toString().padStart(2, "0");
  const millisecString = milliseconds.toString().padStart(2, "0");

 


  useEffect(() => {
    console.log('Game Flag:', gameFlag);
    let timer;

    if (gameFlag) {
      timer = setInterval(() => {
        setTimeElapsed(prevTimeElapsed => prevTimeElapsed + 1);
      }, 10);
    } else if (timeElapsed > 0) {  // Only add record if time has passed
      recordResult(`${minStrig}:${secString}:${millisecString}`);
      addGameRecord(record.current);
    }

    return () => clearInterval(timer);
  }, [gameFlag]);

  return (
    <div>
       
      <div className={gameOver ? 'btn-overlay' : 'Timer-Container'}>
       
        <div className="Timer-Minute">{minStrig}:</div>
        <div className="Timer-Front">{secString}:</div>
        <div className="Timer-Back">{millisecString}</div>
      </div>
     
    </div>
  );
}

export default Timer;
