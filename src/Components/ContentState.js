import React, { useState } from 'react'

//using State Hook
function ContentState(){

    const [count, setCount] = useState(100);

    function incrementFunction(){
        setCount(count + 1)
    }
    function decrementFunction(){
        setCount(count - 1)
    }


  return (
    <main>
    
    <p>Learn about State Hook</p>
    
    <button>
            Click here!
    </button>
    
   <button onClick={decrementFunction}>
        -
    </button>
    <span>
        {count}
    </span>

    <button onClick={incrementFunction}>
        +
    </button>

    </main>
  )
  }

export default ContentState;