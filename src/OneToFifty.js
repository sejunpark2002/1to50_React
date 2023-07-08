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
    const [gameFlag,setGameFlag] = useState(false);
    const [soundOn, setSoundOn] = useState(true);
    const [result, setResult] = useState(0);

   
    const [current,setCurrent] = useState(1);

    const audioRef = useRef(null);
    const bgRef = useRef(null);
    const winRef = useRef(null);
    const bugRef = useRef(null);



  

    // let gameFlag = false;
   
  
    const handleClick = num => {
        // const timer = setInterval(() => {
        //  setTimeElapsed(timeElapsed => timeElapsed + 30);
        //   }, 30);

        if (num === current && soundOn ) {
            audioRef.current.play(); 
            if (num === 50 ) {
                endGame();
                
              }

           const index = numbers.indexOf(num)
            setNumbers(numbers => [
              ...numbers.slice(0,index) ,
             
              num < 26 ? num + 25 : 0,
              ...numbers.slice(index + 1),
       ]);
            
       setCurrent(current + 1)
          
           
        }  if (num != current && soundOn) {
            bugRef.current.play();
            
        } else if (num ===1) {
            startGame()
        }

        
    };

    const stopSound = () => {
    
        setSoundOn(false)
        
            bgRef.current.pause();
            bugRef.current.pause();
            audioRef.current.pause()
        
        // soundOn.current = !soundOn.current
        // console.log(soundOn.current)
      };
 const reStart = () => {
    window.location.reload(false);
 }
    const endGame = () => {
       winRef.current.play();
        setGameFlag(false)
        bgRef.current.pause();
      };

    const startGame = () => {
        // gameFlag = true;
        setGameFlag(true)
        if (soundOn) { bgRef.current.play();}
        };

    const showResult = (result) => {
        setResult(result);
    }

return (

        <div className="OneToFifty-Container" >
             <audio ref={bgRef} src={bgSound}></audio>
             <audio ref={audioRef} src={clickSound}></audio>
             <audio ref={winRef} src={winSound}></audio>
             <audio ref={bugRef} src={bugSound}></audio>
             <button onClick={stopSound}>Stop Sound</button>
             <button onClick={reStart}>Rstart</button>
             <button>{result}</button>

        <Timer gameFlag={gameFlag} showResult={showResult} />
        
{/* 
             {gameFlag ? (
         <Timer/>
      ) : (
        <TimerZero />
      )}
      */}


          
            <OuterBoard numbers={numbers} handleClick={handleClick} > </OuterBoard>
            {/* <Board numbers={numbers} handleClick={handleClick}></Board> */}
           

        </div>
    )
}







export default OneToFifty





