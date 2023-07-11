import React, { useState, useEffect, useRef } from "react";
import "./style.css"
import Result from "./Result"

function ScoreBoard({result}) {

   
    return (
        <div className="Scoreboard">
            <Result result={result} />
           
        </div>
    );

}



export default ScoreBoard;