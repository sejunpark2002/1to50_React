import React from "react";
import Cell from "./Cell"
import "./style.css"

function Board({numbers,handleClick}) {
    return (
        <div className="Board-Container">

            {numbers.map( (num,index) => 
            ( <Cell num={num} key={index} handleClick={handleClick}></Cell>  
            
            ))}
           
        </div>
    );

}



export default Board;