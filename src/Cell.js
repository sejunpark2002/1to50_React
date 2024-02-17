import React from "react";
import "./style.css"

import clickSound from './sound/carrot_pull.mp3';
import failSound from './sound/bug_pull.mp3';

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

