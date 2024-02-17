import React from "react";
import Cell from "./Cell"
import "./style.css"

function Board({numbers,handleClick,gameOver}) {
    return (
        <div className={gameOver? 'Board-Container-Overlay ' : 'Board-Container'}>
           
            {numbers.map( (num,index) => 
            ( <Cell num={num} key={index} handleClick={handleClick} ></Cell>  
            
            ))}
            
        </div>
    );

}



export default Board;

