import React,{useEffect} from "react";
import "./style.css"


function ScoreBoard({currentresult}) {


  const storedRecords = JSON.parse(window.localStorage.getItem('gameRecords')) || [];

  const reStart = () => {
    window.location.reload(false);
 }

 const gameRecordsDecending = storedRecords.sort((a,b) => a - b);
 const convertedTimes = gameRecordsDecending.map(number => {
  const minutes = Math.floor((number % 360000) / 6000);
  const seconds = Math.floor((number % 6000) / 100);
  const milliseconds = number % 100;

  const minStrig = minutes.toString().padStart(2, "0");
  const secString = seconds.toString().padStart(2, "0");
  const millisecString = milliseconds.toString().padStart(2, "0");

  // Return the formatted time string
  return `${minStrig}:${secString}:${millisecString}`;
});

     
    return (
    
          <div className="Result">
           
            
            <div className='Highscore-Board'>
            <div className="Result-Score-Container">
             <div className="Result-Label">Score:</div>
              <div className="Result-Value">{currentresult}</div>
             </div>
              
              <div className="High-Score">
                <h2 className='Score-Title'>Top 5 Scores</h2>
                  {convertedTimes.slice(0, 5).map((time, index) => (
                  <div key={index} className="High-Score-Item">
                  <span className="Rank">{index + 1}.</span>
                  <span className="Time">{time}</span>
                 </div>
               ))}
               </div>

            
             
               <button className="btn btn-playagain" onClick={reStart}>PLAY AGAIN</button>
             
      
            </div>
            
            
        </div>
        
           
        
    );

}



export default ScoreBoard;