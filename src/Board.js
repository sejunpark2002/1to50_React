import React from "react";
import Cell from "./Cell"
import "./style.css"

function Board() {
    return (
        <div className="Board-Container">
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
        </div>
    );

}



export default Board;