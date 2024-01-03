import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { userReducer } from "./Reducer/userReducer";
import { thunk } from "redux-thunk";
import { loginReducer } from "./Reducer/loginReducer";
const rootReducer = combineReducers({
    userReducer,
    loginReducer
    });


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));