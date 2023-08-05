import { useEffect, useState } from "react";
import apiClient from "../../Services/api-client";
import { CanceledError } from "axios";






interface Game {
    id : number;
    name : string
  
  }
  
  
  interface FetchGamesResponse {
    count : number;
    results : Game[]
  }

  const useGames = () => {

      
      
      const [games, setgame] = useState<Game[]>([]);
       const [Error, setError] = useState('');
       
       
       useEffect(()=> {
           const controller = new AbortController();
           
          apiClient.get<FetchGamesResponse>('/games', {signal : controller.signal})
          .then(res => setgame(res.data.results))
          .catch(err => {
            if (err instanceof CanceledError) return;
            setError(err.message)});

          return () => controller.abort();
       }, [])
  
  return {games, Error}
}


export default useGames;