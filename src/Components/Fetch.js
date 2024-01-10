import React, { useState } from 'react'
import { useEffect } from 'react'

const Fetch = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then( (response) => response.json())
        .then( (json) => setData(json))
        .catch( (err) => console.log('Error'))
    }, [])
  return (
    <div>
        {
            data ? (
                <>
                    <h2>{data.title}</h2>
                    <h3>{data.body}</h3>
                </>
            ) 
            : 
            (
                <p>Loading....</p>
            )
        }
    </div>
  )
}

export default Fetch
