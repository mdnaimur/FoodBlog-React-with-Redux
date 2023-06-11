import { combineReducers } from "redux";
import blogsReducer from "./blogs/reducer";
import filterReducer from "./filters/reducer";


const rootReducer = combineReducers({
    blogs: blogsReducer,
    filters: filterReducer,
});


export default rootReducer;
