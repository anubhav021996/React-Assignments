import { ADDTODO } from "./action";

export const reducer= (store, {type, payload}) => {
    switch(type){
        case ADDTODO:
            return {...store, todos: payload};
        default:
            return store;
    }
}