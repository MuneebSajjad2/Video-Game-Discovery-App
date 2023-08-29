import { GameQuery } from "../../App";
import useData from "./useData";
import { Genere } from "./useGenere";


export interface Platform {
  id : number;
  name : string;
  slug : string
}



export interface Game {
    id : number;
    name : string;
    background_image : string;
    parent_platforms : {platform : Platform}[];
    metacritic : number
    
  
  }
  
  

  const useGames = (gameQuery : GameQuery) => useData<Game>('/games',
   {
    params: {genres : gameQuery.genre?.id, Platforms : gameQuery.platform?.id , sortOrder : gameQuery.order, search : gameQuery.searchText}
  },
   [
    gameQuery
  ])

export default useGames;