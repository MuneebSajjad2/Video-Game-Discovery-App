import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

interface Game {
  id : number;
  name : string

}


interface FetchGamesResponse {
  count : number;
  results : Game[]
}

const GameGrid = () => {

    const [games, setgame] = useState<Game[]>([]);
     const [Error, setError] = useState('');


     useEffect(()=> {

        apiClient.get<FetchGamesResponse>('/games')
        .then(res => setgame(res.data.results))
        .catch(err => setError(err.message));
     })


  return (
  <>
    {Error && <p>{Error}</p>}
    <ul>
      {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  
</>
  )
}
export default GameGrid