import React from 'react';
// import {showCounter} from '../../redux/counter2/counter2.actions';
import {useSelector} from 'react-redux'

const Showcounter = () => {
    const state =useSelector(state =>{return state})
    return (
        <div>
        number is : {state.conter2reducer.number}
        </div>
    );
}

export default Showcounter;
