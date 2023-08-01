import React from 'react';
import {connect} from "react-redux"
const tablestyle={
    border:"2",
    textAlign:"center",
    padding:"4px",
    width:"40%",
    margin:"10px auto"

}

const Showpost = (props) => {
    return (
        <div>
            <h3>Showpost</h3>
            number of products : {props.count}
            <table style={tablestyle} border="1">
                <thead>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                </thead>
                <tbody>
                    {props.products.map((item)=>(<tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
    
}
const mapStateToProps=(state)=>{
    return {products:state.productreducer.products,count:state.productreducer.productCount}
}

export default connect(mapStateToProps,null) (Showpost);
