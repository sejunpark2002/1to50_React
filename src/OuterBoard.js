import React from "react";
import Board from "./Board"
import "./style.css"

function OuterBoard({numbers,handleClick}) {
    return (
        <div className="Outer-Board-Container">
            <Board numbers={numbers}  handleClick={handleClick} ></Board>
        </div>
    );

}



export default OuterBoard;