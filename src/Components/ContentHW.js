import React, { useState } from 'react'

function ContentHW() {

    const [name, setName] = useState("abc")
    function handleChange(){
        const name =[ "abc", "efg", "hij","klm","nop", "qrs", "tuv","wxyz"]
        const int = Math.floor(Math.random()*8)
        setName( name[int])
    }

  return (

   <main>
   <p>
        Hello {name}
   </p>
    <button onClick={handleChange}>
        Click to change
    </button>
   </main>
  )
}

export default ContentHW