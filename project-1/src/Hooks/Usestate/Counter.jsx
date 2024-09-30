import React, { useState } from "react";

import "./Counter.css"

function Counter(){

    const [count, setCount] = useState(0);
    

return(
    <div id="btn">
        
      <h1  id="count"> Counter: {count} </h1>


      <button 
      disabled={count == 10}
       onClick={function () {
          setCount(count + 1);
        }}
      >
       <h5>Increment</h5> 


         
      </button>


<button 
 disabled={count == 0}
        onClick={function () {
          setCount(count - 1);
        }}>
          <h5>Decerement</h5>  

</button>

    </div>
)
 

}

export default Counter;