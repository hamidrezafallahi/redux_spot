import {combineReducers} from 'redux';
import conter1reducer from './counter/counterReducers';
import conter2reducer from './counter2/counter2.reducer';
import productreducer from './post/product.reducer';
const rootReducer = combineReducers({
    conter1reducer:conter1reducer,
    conter2reducer:conter2reducer,
    productreducer:productreducer
})
export default rootReducer;