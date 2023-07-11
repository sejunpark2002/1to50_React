import React from "react";
import Board from "./Board"
import "./style.css"

function OuterBoard({numbers,handleClick,gameOver}) {
    return (
        <div className={gameOver? 'Outer-Board-Container-Overlay' : 'Outer-Board-Container'}>
            <Board gameOver={gameOver} numbers={numbers}  handleClick={handleClick} ></Board>
        </div>
    );

}



export default OuterBoard;

