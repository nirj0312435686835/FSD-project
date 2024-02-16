
import {myAxios} from "./Helper";

const Register=(user)=>{
    return myAxios.post('server api',user)
    .then((response)=>response.data);
}