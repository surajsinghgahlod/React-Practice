import React, { useState } from 'react'
import './Common.css'

const Counter = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
        <div>
            <h3>Counter App</h3>
        </div>
        <div>
            <h1> {count} </h1> 
        </div>
        <div className='buttons'>
            <button onClick={()=> {setCount(count + 1)}}>+</button>
            <button onClick={()=> {setCount(count -1)}}>-</button>
        </div>
    </div>
  )
}

export default Counter
