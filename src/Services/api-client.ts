import axios from "axios";



export default axios.create({
    baseURL :  'https://api.rawg.io/api',
    params : {
        key : 'bb9555c4e5d74de39eeaff04f86826c7'
    }

})