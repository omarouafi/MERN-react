import axios from 'axios'
import {productTypes} from './product.types'

const fetchProductsStart = () => ({
    type:productTypes.FETCH_PRODS_START
})

const fetchProductSuccess = (items) => ({
    type:productTypes.FETCH_PRODS_SUCCESS,
    payload:items
})
const fetchProductFailure = (error) => ({
    type:productTypes.FETCH_PRODS_FAILURE,
    payload:error
})


export const productsFetchAsync = () => async dispatch => {

    try {
        dispatch(fetchProductsStart())

        const {data} = await axios.get('/api/products')
        dispatch(fetchProductSuccess(data))
        
        
    } catch (error) {
        dispatch(fetchProductFailure(
            (error.response && error.response.data.message ? error.response.data.message : error.message)
        ))
        
    }

}
