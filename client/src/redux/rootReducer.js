import {combineReducers} from 'redux'
import { productReducer } from './products/product.reducer';
import { detailReducer } from './product_detail/p_detail.reducer';


export default combineReducers({
    productRed:productReducer,
    productDetail:detailReducer
});