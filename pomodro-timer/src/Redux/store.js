import { legacy_createStore } from "redux";
import { reducer } from "./reducer";



 export const store = legacy_createStore(reducer,{
    profile_data:{
        profile_img:'https://avatars.dicebear.com/api/male/username.svg',
        profile_name:'Welecome Guest'
    }
 })