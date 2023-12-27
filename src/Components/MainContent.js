import React from 'react';
import ItemsPage from './ItemsPage';

const MainContent = ({items, handleClickFn, deleteFn} ) => {

    
  return ( 
    <main>
        {(items.length) ? (
            <ItemsPage
            items = {items}
            handleClickFn = {handleClickFn}
            deleteFn = {deleteFn}
                          />
                          ) : ( 
                            <p style={{margin: '0.25rem'}}> 
                            Your list is empty
                            
                            </p>)
                        }
                        
                        
                        </main>
                        )
                    }
                    
    export default MainContent
                    
                    // <button>Delete</button>
                    // <button onDoubleClick={ handleDeleteAll}> DELETE ALL </button>





                    // const numbers = [-2,-1,0,1,2]
                    // const itemss = numbers.filter(n=> n>=0).map(n=>({number:n}))
                    // console.log(itemss)