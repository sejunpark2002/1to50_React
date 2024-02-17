import React, { useState, useEffect, useRef } from "react";
import "./style.css"

function Result({result}) {

    const reStart = () => {
        window.location.reload(false);
     }

     
    return (
        <div className="Result">
            <div className="Result-Score"> YOUR SCORE:</div>
            <div className="Result-Score">{result}</div>
            
           <button className="btb btn-playagin" onClick={reStart}>PLAY AGAIN</button>
           
        </div>
    );

}



export default Result;