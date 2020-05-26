import {combineReducers} from "redux";
import cjmReducer from "./cjmReducer";

export default combineReducers({
    cjm: cjmReducer
});

