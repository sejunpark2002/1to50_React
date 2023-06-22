import React from "react";
import Cell from "./Cell"
import "./style.css"

function Board({numbers,handleClick,handleSound}) {
    return (
        <div className="Board-Container">

            {numbers.map( (num,index) => 
            ( <Cell num={num} key={index} handleClick={handleClick} handleSound={handleSound}></Cell>  
            
            ))}
           
        </div>
    );

}



export default Board;