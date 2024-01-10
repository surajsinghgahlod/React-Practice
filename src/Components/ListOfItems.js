import React from 'react'

const ListOfItems = () => {
    const List = [ 'Manoj', 'Suraj', 'Dhiraj', 'Sunaina', 'Deesha', 'Aniket']
  return (
    <div>
      {
        List.map((item, index) => (
            <ul>
                <li key={index}>{item}</li>
            </ul>
        ))
      }
    </div>
  )
}

export default ListOfItems
