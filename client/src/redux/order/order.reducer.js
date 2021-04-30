import { orderTypes } from "./order.types";


const createOrderReducer = (state={},action)=>{

    switch (action.type) {
        case orderTypes.CREATE_ORDER_START:
            return {
                ...state,
                loading:false,

            }
            
        case orderTypes.CREATE_ORDER_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true,
                order:action.payload,

            }
            
        case orderTypes.CREATE_ORDER_FAIL:
            
            return{
                ...state,
                loading:false,
                error:action.payload
            }
    
        default:
            return state
    }
}

export default createOrderReducer