import React from "react";
import "./style.css"



function Cell({num, handleClick,handleSound}) {
    return  (
    
    <div className="Cell-Container" onClick={()=> {handleClick(num); handleSound();}} >
    {num !== 0 ? num : null
    
    }
        
    </div>
    );
}


export default Cell;