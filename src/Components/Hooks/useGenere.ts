import data from "../Data/data";
import useData from "./useData";

export interface Genere {
    id : number;
    name : string;
    image_background : string


}

const useGenere = () => ({Data : data , isLoading : false, Error : null})

export default useGenere