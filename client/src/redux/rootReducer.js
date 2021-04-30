import {combineReducers} from 'redux'
import { cartReducer } from './cart/cart.reducer';
import { productReducer } from './products/product.reducer';
import { detailReducer } from './product_detail/p_detail.reducer';
import {loginReducer, userDetailsRedcuer} from '../redux/user/user.reducer'
import createOrderReducer from './order/order.reducer';


export default combineReducers({
    productRed:productReducer,
    productDetail:detailReducer,
    cart:cartReducer,
    userLogin:loginReducer,
    userDetail:userDetailsRedcuer,
    createOrderReducer,
});