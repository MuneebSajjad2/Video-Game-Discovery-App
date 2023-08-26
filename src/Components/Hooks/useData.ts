import { useEffect, useState } from "react";
import apiClient from "../../Services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse <T>{
    count : number;
    name : string;
    results : T[]
}



const useData = <T>(endpoint : string, requestConfig? : AxiosRequestConfig, deps? : any[]) => {

    const [Data, setData] = useState<T[]>([]);
    const [Error, setError] = useState('');
    const [isLoading , setLoading] =useState(false);
    
    
    useEffect(()=> {
        const controller = new AbortController();
        

        setLoading(true)
       apiClient
       .get<FetchResponse<T>>(endpoint, {signal : controller.signal, ...requestConfig})
       .then(res => 
         {
           setData(res.data.results)
           setLoading(false)
       })
       .catch(err => {
         if (err instanceof CanceledError) return;
         setError(err.message)
         setLoading(false)
       });

       return () => controller.abort();
    }, deps ? [...deps] : [])

return {Data, Error, isLoading}
}


export default useData