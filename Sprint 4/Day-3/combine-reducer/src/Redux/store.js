import {legacy_createStore as createStore} from "redux";
import { reducer } from "./login/reducer";
import { combineReducers } from "redux";
const rootReducer= combineReducers({
    token: reducer,
});

export const store= createStore(rootReducer);