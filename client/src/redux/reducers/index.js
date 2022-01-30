import { combineReducers } from "redux";
import productReducer from './productReducer'

const routReducer=combineReducers(
    {
        productReducer
    }
)

export default routReducer