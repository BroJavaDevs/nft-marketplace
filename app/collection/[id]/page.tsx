import React from 'react'

type Paramaters = {
  params : {
    id: string
  }
}

export default function Collection({ params: { id } } : Paramaters) {
  console.log(id)  
  return (
    <div className=''>
      <h1>{id}</h1>
    </div>
  )
}
