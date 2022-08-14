import { ADDTOKEN } from "./action";

export const reducer= (state={token:""}, {type,payload}) => {
    switch(type){
        case ADDTOKEN:
            return {...state, token: payload};
        default:
            return state;
    }
}