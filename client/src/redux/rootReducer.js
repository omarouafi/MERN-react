import {combineReducers} from 'redux'
import { productReducer } from './products/product.reducer';


export default combineReducers({
    productRed:productReducer
});