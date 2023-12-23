import React from 'react';

function Content (){

   function handleClick(e){

        // alert("You have clicked")
        console.log("You have clicked")
        console.log(e.target)
        console.log(e.target.innerText)
        }


    // const handleClick2 = (name)=>{
    //     return(
    //         console.log(`Welcome ${name}`)
    //     )
    // }    

    // function handleClick2(className){
    //     alert("Vaa da govvaaluuuu")
        
    // }    

    const handleClick2 = (name) => {
        return(
        console.log(`Task Completed ${name}`)
        )

    }
    
    return(
       <main>
       
       
       Content goes here

       <button onClick={(e)=>handleClick(e)}>
            Subscribe
       </button>
        <div>
       <button onClick={()=>handleClick2('Govalooo')}>
            Message!
       </button>
       </div>
       </main>

)

}

export default Content;