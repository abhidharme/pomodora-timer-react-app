import {  PROFILE_DATA} from "./action";

 var profile_data = {};

export const reducer = (store = profile_data,{type , payload})=>{
   switch(type){
        case PROFILE_DATA:
        //console.log('reducer',payload)
        return{
            ...store,
            profile_data:payload,
        }
        default:
            return store;
   }
}