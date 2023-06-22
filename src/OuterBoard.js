import React from "react";
import Board from "./Board"
import "./style.css"

function OuterBoard({numbers,handleClick,handleSound}) {
    return (
        <div className="Outer-Board-Container">
            <Board numbers={numbers} handleClick={handleClick} handleSound={handleSound}></Board>
        </div>
    );

}



export default OuterBoard;