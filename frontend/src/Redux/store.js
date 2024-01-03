import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { userReducer } from "./Reducer/userReducer";
import { thunk } from "redux-thunk";
import { loginReducer } from "./Reducer/loginReducer";
import { doubtReducer } from "./Reducer/doubtReducer";
import { fetchdoubtReducer } from "./Reducer/fetchdoubtReducer";
import { notifiedReducer } from "./Reducer/notifiedReducer";
import { assignedReducer } from "./Reducer/assignedReducer";
const rootReducer = combineReducers({
    userReducer,
    loginReducer,
    doubtReducer,
    fetchdoubtReducer,
    notifiedReducer,
    assignedReducer
    });
  
   
   


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));