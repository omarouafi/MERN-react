

import {userTypes} from './user.types'

export const loginReducer = (state={},action) =>{

    switch (action.type) {
        case userTypes.USER_START:
            return {...state,loading:true}
        case userTypes.LOGOUT:
            return {...state,currentUser:null,error:null}

        case userTypes.USER_SUCESS:
            return {...state,error:undefined,loading:false,currentUser:action.payload}
            
        case userTypes.USER_FAIL:
            
            return {...state,loading:false,currentUser:undefined,error:action.payload}
    
        
       
        default:
            return state
    }

}


export const userDetailsRedcuer = (state={user:{}},action) => {

    switch (action.type) {
        case userTypes.GET_USER_START:
            
            return {...state,loading:true,error:undefined}
    
        case userTypes.GET_USER_SUCCESS:
            
            return {...state,loading:false,error:undefined,user:action.payload}
    
        case userTypes.GET_USER_FAIL:
            
            return {...state,loading:false,error:action.payload}
        default:
            return state;
    }

}


export const userUpdateRedcuer = (state={},action) => {

    switch (action.type) {
        case userTypes.UPDATE_USER_START:
            
            return {...state,loading:true,error:undefined}
    
        case userTypes.UPDATE_USER_SUCCESS:
            
            return {...state,loading:false,error:undefined,currentUser:action.payload}
    
        case userTypes.UPDATE_USER_FAIL:
            
            return {...state,loading:false,error:action.payload}
    
        default:
            return state;
    }

}
