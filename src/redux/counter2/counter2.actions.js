import {INCREASE_COUNTER,DECREASE_COUNTER,SHOW_COUNTER} from './ActionTypes';


export const increaseCounter =()=>{
    return {
        type:INCREASE_COUNTER
    }
}
export const decreaseCounter =()=>{
    return {
        type:DECREASE_COUNTER
    }
}
export const showCounter =()=>{
    return {
        type:SHOW_COUNTER
    }
}