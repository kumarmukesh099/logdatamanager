import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR,
    LOGS_ERROR
     } from '../actions/types'

const initialState = {
    techs : null,
    loading : false,
    error: null 
}

export default (state=initialState,action)=>{
switch(action.type){
    case GET_TECHS : 
    return {
        ...state,
        techs : action.payload,
        loading : false
    }
    case DELETE_TECH : 
    return {
        ...state,
        techs : state.techs.filter((tech)=> tech.id != action.payload.id),
        loading : false
    }
 case SET_LOADING : 
 return{
     ...state,
     loading : true
 }
 case LOGS_ERROR:
    console.error(action.payload)
    return {
        ...state,
        error: action.payload
    }
 default : 
 return state;
}
}