import React from 'react';
import {increaseCounter,decreaseCounter} from '../../redux/counter2/counter2.actions';
import {useDispatch} from 'react-redux'
const Changecounter = () => {
    const dispatch =useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(increaseCounter())}>up</button>
            <button onClick={()=>dispatch(decreaseCounter())}>down</button>
        </div>
    );
}

export default Changecounter;
