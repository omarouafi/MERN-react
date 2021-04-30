import axios from "axios"
import { orderTypes } from "./order.types"



export const createOrderAction = (order) => async (dispatch,getState) => {

    try {
        dispatch({type:orderTypes.CREATE_ORDER_START})



        const config = {
            headers:{
                'Content-Type':"Application/json",
                Authorization:`Bearer ${getState().userLogin.currentUser.token}`
            },

        }
        console.log(getState().userLogin.currentUser.token);
        
        const {data} = await axios.post('/api/orders',order,config)
        dispatch({type:orderTypes.CREATE_ORDER_SUCCESS,payload:data})
        
        
    } catch (error) {
        dispatch({type:orderTypes.CREATE_ORDER_FAIL,
            payload:(error.response && error.response.data.message ? error.response.data.message : error.message)
        })
        
    }

}

