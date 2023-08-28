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
  
  

  const useGames = (selectedGenere : Genere | null , seletedPlatform : Platform | null) => useData<Game>('/games',
   {
    params: {genres : selectedGenere?.id, Platforms : seletedPlatform?.id}
  },
   [
    selectedGenere?.id, seletedPlatform?.id
  ])

export default useGames;