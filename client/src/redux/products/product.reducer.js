import {productTypes} from './product.types'

const INITIAL_STATE = {
    products:[],
    loading:false,
    error:undefined
}

export const productReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case productTypes.FETCH_PRODS_START:
            return {...state,loading:true}
        case productTypes.FETCH_PRODS_SUCCESS:
            return {...state,loading:false,products:action.payload}
        case productTypes.FETCH_PRODS_FAILURE:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }   
}

