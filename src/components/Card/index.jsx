import React, { useState } from 'react'


const Card = () => {
 const [isRed, setIsRed] = useState(false);



  return (
    <div>
     <div
        style={{
          width: 150,
          height: 150,
          backgroundColor: isRed ? "red" : "blue",
        }}
      />
      <button onClick={() => setIsRed(!isRed)}>Toggle Color</button>
    </div>
  )
}

export default Card
