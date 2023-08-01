import React,{useState} from 'react';
import {searchProduct} from './../../redux/post/product.actions';
import {connect} from 'react-redux'
const Searchpost = (props) => {
    const [productId,setProductId]=useState(0);

    const changehandler=(event)=>{
        setProductId(event.target.value);
        props.find(event.target.value);
    }
    return (
        <div>
            search product by id :<br/>
            <input type="number" name="id"  value={productId}onChange={changehandler}/>

        </div>
    );
}
 const mapDispatchToProps=(dispatch)=>{
     return {find:(id)=>{dispatch(searchProduct(id))}}
 }
export default connect(null,mapDispatchToProps) (Searchpost);
