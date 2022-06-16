import {combineReducers} from "redux";
import toolsReducer from "./tools";

export default  combineReducers({
    tools :toolsReducer
});