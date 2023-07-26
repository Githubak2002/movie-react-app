import React from 'react'
import {arr} from "../arr-var/constants"
import Cards from "../componentes/cards"

const fun = (arr) => (
  <Cards 
  id={arr.id}
  tarikh={arr.tarikh}
  name={arr.name}
  source={arr.source}
  />
)

const MovieCard = () => {
  return (
    <section>
      <h4 className='text-center text-red-100 font-bold py-6 text-4xl'>Movies</h4>

    <div className='flex flex-wrap justify-center items-center'> 
      {
        arr.map(fun)
      }
    </div>
    </section>
  )
}

export default MovieCard;
