import React from 'react'

import ListComponent from './ListComponent'

const ItemsPage = ({items, handleClickFn, deleteFn}) => {
  return (
    <main>
  

    <ul>
        {items.map((item)=> (
             <ListComponent
             item = {item}
             key={item.id}
             handleClickFn = {handleClickFn}
             deleteFn = {deleteFn}
             />
         ))}
        
    </ul>
    
    </main>
    
  )
}

export default ItemsPage