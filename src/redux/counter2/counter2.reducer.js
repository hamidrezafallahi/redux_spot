import {INCREASE_COUNTER,DECREASE_COUNTER} from './ActionTypes';
const initialState={
    number:0
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case INCREASE_COUNTER:
        {
            return {...state,number:state.number+1}
        }
        case DECREASE_COUNTER:
        {
            return {...state,number:state.number-1}
        }
        default :{
            return state;
        }

    }
}
export default reducer;