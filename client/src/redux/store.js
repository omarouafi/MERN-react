import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './rootReducer'
import thunk from 'redux-thunk'


const middlewares = [thunk]

export const store = createStore(reducers,composeWithDevTools(applyMiddleware(...middlewares)));