import React from "react";
import "./style.css"




function Cell({num, handleClick}) {

   
    return  (
     <div>
            
            <div className="Cell-Container" onClick={()=> {handleClick(num); }} >
            {num !== 0 ? num : null}
            </div>
     </div>   
    
    );
}


export default Cell;