import React, { useState } from 'react'

const UserInput = () => {
    const[input, setInput] = useState('')

  return (
    <div>
      <input className="userInput" type="text" value={input} onChange={(e) => {setInput(e.target.value)}}  />
      <p>User Input: {input} </p>
    </div>
  )
}

export default UserInput
