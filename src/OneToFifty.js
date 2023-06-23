import React, { useState, useEffect, useRef } from "react";

import "./style.css"
import OuterBoard from "./OuterBoard"
import Timer from "./Timer"
import clickSound from './sound/carrot_pull.mp3';





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
    
    const [numbers,setNumbers] = useState(shuffleArray(array));
    const [gameFlag,setGameFlag] = useState(false);
    const [current,setCurrent] = useState(1)
 
    const audioRef = useRef(null);
   
  

    const handleClick = num => {
        
        if (num === current) {
            if (num === 50 ) {
               
                endGame()
            }
        const index = numbers.indexOf(num)
            setNumbers(numbers => [
              ...numbers.slice(0,index) ,
             
              num < 26 ? num + 25 : 0,
              ...numbers.slice(index + 1),
            //   console.log(numbers)
              
            ]);
            setCurrent(current + 1)
           
        }

        setGameFlag(true);
        audioRef.current.play();
        
      
       
    };

  
    function playSound(sound) {
        sound.currentTime = 0;
        sound.play();
      }



    const startGame = () => {      
        setNumbers(shuffleArray(array));
        setCurrent(1);
      
        
    };

    const endGame = () => {
        setGameFlag(false);
       
    };

  
  

  

    return (

    

        <div className="OneToFifty-Container" >
           
           <audio ref={audioRef} src={clickSound}></audio>
            <Timer gameFlag={gameFlag} />
            <OuterBoard numbers={numbers} handleClick={handleClick} > </OuterBoard>
            {/* <Board numbers={numbers} handleClick={handleClick}></Board> */}
           

        </div>
    )
}




export default OneToFifty