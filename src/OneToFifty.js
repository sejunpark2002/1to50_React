import React, { useState, useEffect, useRef } from "react";

import "./style.css"
import OuterBoard from "./OuterBoard"
import Timer from "./Timer"
import clickSound from './sound/carrot_pull.mp3';
import bgSound from './sound/bg.mp3';
import TimerZero from "./TimerZero";
import winSound from './sound/game_win.mp3';
import bugSound from './sound/bug_pull.mp3';




let array =[];
for (let i=1; i <= 25 ; i++) {
    array.push(i)
;}

const shuffleArray = array => {
    for (let i = array.length - 1; i>0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];

    }
    return array

}

function OneToFifty() {
    
    const [numbers, setNumbers] = useState(shuffleArray(array));
    // const [gameFlag,setGameFlag] = useState(false);
    const [current,setCurrent] = useState(1);

    const audioRef = useRef(null);
    const bgRef = useRef(null);
    const winRef = useRef(null);
    const bugRef = useRef(null);

    const [timeElapsed, setTimeElapsed] = useState(0);
    
    const record = useRef();
    record.current = timeElapsed;

    let gameFlag = false;
   
  
    const handleClick = num => {
        // const timer = setInterval(() => {
        //  setTimeElapsed(timeElapsed => timeElapsed + 30);
        //   }, 30);

        if (num === current ) {
            startGame()
            if (num === 50 ) {
                endGame();
                // clearInterval(timer);
              
            }

           
           
        const index = numbers.indexOf(num)
            setNumbers(numbers => [
              ...numbers.slice(0,index) ,
             
              num < 26 ? num + 25 : 0,
              ...numbers.slice(index + 1),
            //   console.log(numbers)
              
            ]);
            setCurrent(current + 1)
            //  audioRef.current.play();
           
        }  if (num != current) {
            bugRef.current.play();
            
        }

        
    };

    const stopSounds = () => {
      
        bgRef.current.pause();
        audioRef.current.pause(); 
        bugRef.current.pause();
      };

    const endGame = () => {
      
     
        winRef.current.play();
        gameFlag = false
        alert(record.current/1000);
        bgRef.current.pause();
      
       
    };

    const startGame = () => {
        gameFlag = true;
        audioRef.current.play(); 
        bgRef.current.play();
           
    };

return (

        <div className="OneToFifty-Container" >
             <audio ref={bgRef} src={bgSound}></audio>
             <audio ref={audioRef} src={clickSound}></audio>
             <audio ref={winRef} src={winSound}></audio>
             <audio ref={bugRef} src={bugSound}></audio>
             <button onClick={stopSounds}>Stop Sounds</button>

             {gameFlag ? (
         <Timer  timeElapsed={timeElapsed} />
      ) : (
        <TimerZero />
      )}


          
            <OuterBoard numbers={numbers} handleClick={handleClick} > </OuterBoard>
            {/* <Board numbers={numbers} handleClick={handleClick}></Board> */}
           

        </div>
    )
}







export default OneToFifty





