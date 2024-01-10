import React, { useState } from 'react'

const ToggleSwitch = () => {
    const[input, setInput] = useState(false)
    const handleCheck = () =>{
        setInput(!input)
    }
  return (
    <div>
      <input type="checkbox" onClick={handleCheck}/>
      <p>{ input ? "ON" : "OFF" }</p>
    </div>
  )
}

export default ToggleSwitch
