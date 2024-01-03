import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { userReducer } from "./Reducer/userReducer";
import { thunk } from "redux-thunk";
import { loginReducer } from "./Reducer/loginReducer";
import { doubtReducer } from "./Reducer/doubtReducer";
import { fetchdoubtReducer } from "./Reducer/fetchdoubtReducer";
const rootReducer = combineReducers({
    userReducer,
    loginReducer,
    doubtReducer,
    fetchdoubtReducer
    });
   
   


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));