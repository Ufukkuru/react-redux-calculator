import {SET_INPUT,PERFORM_OPERATION,CLEAR} from './actionTypes'

export const setInput = (value) => {
    if (!isNaN(value)){
        return{
            type: SET_INPUT,
            payload: value.toString()
        }
    }
    return{
        type:SET_INPUT,
        payload: ''
    }
}

export const performOperation = (operator) => {
    return {
        type:PERFORM_OPERATION,
        payload:operator
    }
}

export const clearInput = () =>{
    return{
        type:CLEAR
    }
}