// import React from "react"
// import {increase} from "../redux/counter/counterActions";
// import {connect} from "react-redux"
// const Counter = (props)=>{

//     return(
//         <>
//         <div>
//             <h2>number is : {props.count}</h2>
//             <button onClick={props.add}>up</button>
//         </div>
//         </>
//     )
// }
// const mapStateToProps =(state) =>{
//     return {count:state.count}
// }
// const mapDispatchToProps = (dispatch)=>{
//     return {add:()=>dispatch(increase())}
// }
// export default connect(mapStateToProps,mapDispatchToProps) (Counter);
////////////////////////////////////////////////////////////////////////////////////////
import React from "react"
import {increase} from "../../redux/counter/counterActions";
import {useSelector,useDispatch} from 'react-redux'
const Counter = ()=>{
const state = useSelector(state=>{return state});
const dispatch = useDispatch();
    return(

        <div>
            <h2>number is : {state.conter1reducer.count}</h2>
            <button onClick={()=>dispatch(increase())}>up</button>
        </div>

    )
}
export default Counter;