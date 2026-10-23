import React from 'react'

const index = ({items, renderItems}) => {
  return (
    <ul className='list-group'>
        {items.map((item, index) => (
            <li key={index} className='list-group-item'>
                {renderItems(item)}
            </li>
        ))}
      
    </ul>
  )
}

export default index
