import { LOGOUT_REQUEST , PROFILE_DATA} from "./action";

var logout_data = false;

export const reducer = (store = logout_data , {type , payload})=>{
   switch(type){
    case LOGOUT_REQUEST:
        console.log('reducer',payload)
        return{
            ...store,
            logout_data:payload
        }
        case PROFILE_DATA:
        console.log('reducer',payload)
        return{
            ...store,
            profile_data:payload,
        }
        default:
            return store;
   }
}