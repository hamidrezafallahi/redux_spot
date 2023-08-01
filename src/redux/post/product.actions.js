import { GET_PRODUCTS, GET_PRODUCT_BY_ID, ADD_PRODUCT } from "./Actionstypes";
export const showProduct = () => {
    return { type: GET_PRODUCTS }
}
export const searchProduct = (id) => {
    return { type: GET_PRODUCT_BY_ID, payload: id }
}
export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}