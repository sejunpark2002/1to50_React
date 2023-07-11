import React, { useState, useEffect, useRef } from "react";
import "./style.css"

function Result({result}) {

    const reeStart = () => {
        window.location.reload(false);
     }
    return (
        <div className="Result">
            <div className="Result-Score"> YOUR SCORE:</div>
            <div className="Result-Score">{result}</div>
            
           <button className="btn btn-playagin" onClick={reeStart}>PLAY AGAIN</button>
        </div>
    );

}



export default Result;