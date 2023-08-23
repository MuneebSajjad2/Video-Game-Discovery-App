


import React from 'react'
import useGenere from './Hooks/useGenere'

const GenereList = () => {

    const {Genre} = useGenere()

  return (
    <ul>
        {Genre.map(genere => <li key={genere.id}> {genere.name} </li>)}
    </ul>
  )
}

export default GenereList