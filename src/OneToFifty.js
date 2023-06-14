import React, { useState } from "react"

import "./style.css"
import Board from "./Board"
import Timer from "./Timer"

let array =[];
for (let i=1; i <= 25 ; i++) {
    array.push(i)
;}


function OneToFifty() {
    
    const [numbers,setNumbers] = useState(array);
    const [gameFlag,setGameFlag] = useState(false);
    const [current,setCurrent] = useState(1)
    


    const handleClick = num => {
        if (num === current) {
            if (num === 50 ) {
                console.log("Success")
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
    };

    const startGame = () => {
        setNumbers(shuffleArray(array));
        setCurrent(1);
        setGameFlag(true);
    };

    const endGame = () => {
        setGameFlag(false);
    };




    return (
        <div className="OneToFifty-Container" >
            <Board numbers={numbers} handleClick={handleClick}></Board>
            {gameFlag ? (
                <Timer />
            ) : (
                <button className="Start-Button" onClick={startGame}>Start</button>
            )
            }

        </div>
    )
}

const shuffleArray = array => {
    for (let i = array.length - 1; i>0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];

    }
    return array

}

export default OneToFifty