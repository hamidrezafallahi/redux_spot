import React from 'react'
import {connect} from 'react-redux'
import {addProduct} from './../../redux/post/product.actions'
function Addpost(props) {
    const insertProductToList = (event)=>{
        event.preventDefault();
        const myform = new FormData(event.target);
        const i = myform.get("id");
        const n = myform.get("name");
        const p = myform.get("price");
        props.add({id:i,name:n,price:p});
        alert('added product');
        event.target.reset();
    }
    return (
        <div>
            <h3>Add product :</h3>
            <form action="" onSubmit={(event=>{insertProductToList(event)})}>
            product id : <input type="number" name ="id"/><br/><br/>
            product name : <input type="text" name="name"/><br/><br/>
            product price : <input type="number" name="price"/><br/><br/>
            <button type="submit">ADD product</button>
            </form>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {add:(product)=>{dispatch(addProduct(product))

    }}
}

export default connect(null,mapDispatchToProps) (Addpost)

