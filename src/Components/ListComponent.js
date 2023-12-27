import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const ListComponent = ({item, handleClickFn, deleteFn}) => {
  return (
    <li className="item" key={item.id}>
                <input 
                     type="checkbox"
                     onChange={()=> handleClickFn(item.id)}
                     checked={item.check}
                />
        
                <label
                     onClick={()=> handleClickFn(item.id)}
                     style={(item.check)?{textDecoration:'line-through'}: null}
                >
                    {item.task}
                
                </label>

                <FaTrashAlt  
                    role="button"
                   tabIndex='0'
                   onClick={()=> deleteFn(item.id)} 
                   aria-label={`Delete ${item,item}`}
                > 
                </FaTrashAlt>
            </li>
  )
}

export default ListComponent