import React, { useState } from 'react'

const ChangeBG = () => {
    const [backgroundColor, setBackgroundColor]= useState('yellow')
    const HandleColor = () => {
        const newColor = backgroundColor !== 'yellow' ? 'lightblue' : 'pink'
        setBackgroundColor(newColor)
    }
  return (
    <div>
        <div onClick={HandleColor}
            style={{
                backgroundColor,
                border: '2px solid grey',
                height: '200px',
                width: '200px',
                cursor: 'pointer'
            }}
        >
            Change background color from here
        </div>
    </div>
  )
}

export default ChangeBG
