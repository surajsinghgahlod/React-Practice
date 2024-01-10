import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(60)

    useEffect(() => {
        if(time > 0){
            const timmer = setTimeout(() => setTime(time - 1), 1000)
            return () => { clearTimeout(timmer) }
        }
    }, [time])

  return (
    <div>
      Timmer: Only {time} seconds are left
    </div>
  )
}

export default Timer
