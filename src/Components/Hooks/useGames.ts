import { useEffect, useState } from "react";
import apiClient from "../../Services/api-client";
import { CanceledError } from "axios";
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
  
  

  const useGames = (selectedGenere : Genere | null) => useData<Game>('/games', {params: {genres : selectedGenere?.id}}, [selectedGenere?.id])

export default useGames;