import { useEffect, useState } from "react";
import apiClient from "../../Services/api-client";
import { CanceledError } from "axios";



interface Genere {
    id : number;
    name : string

}
interface FetchGenereResponse {
    count : number;
    name : string;
    results : Genere[]
}



const useGenere = () => {

    const [Genre, setGenre] = useState<Genere[]>([]);
    const [Error, setError] = useState('');
    const [isLoading , setLoading] =useState(false);
    
    
    useEffect(()=> {
        const controller = new AbortController();
        

        setLoading(true)
       apiClient
       .get<FetchGenereResponse>('/genres', {signal : controller.signal})
       .then(res => 
         {
           setGenre(res.data.results)
           setLoading(false)
       })
       .catch(err => {
         if (err instanceof CanceledError) return;
         setError(err.message)
         setLoading(false)
       });

       return () => controller.abort();
    }, [])

return {Genre, Error, isLoading}
}


export default useGenere