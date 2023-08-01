import { GET_PRODUCTS, GET_PRODUCT_BY_ID, ADD_PRODUCT } from "./Actionstypes";

const items = [
    { id: "1", name: "hamid", price: "111" },
    { id: "2", name: "reza", price: "222" },
    { id: "3", name: "ali", price: "333" },
    { id: "4", name: "abbas", price: "444" },
    { id: "5", name: "ramez", price: "555" }
]
const initialState = {
    products: items,
    productCount: items.length
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: return { ...state, products: state.products, productCount: state.products.length }
        case GET_PRODUCT_BY_ID: if (action.payload !== "") {
            const temp = state.products.filter(product => product.id === action.payload)
            return { ...state, products: temp }
        }
            return { ...state,products:items }
        case ADD_PRODUCT: 
            return { ...state, products: state.products.concat([action.payload]), productCount: state.productCount + 1 };

        default:
            return state;
    }
}
export default reducer;