import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT, TOGGLE_FALSE, TOGGLE_TRUE } from "../types";


const initState={
    products : [],
    product:{},
    loading : true,
    edit:false
}

const productReducer=(state=initState, action)=>{
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {...state, products:action.payload, loading:false}
        case TOGGLE_TRUE:
            return {...state, edit:true}
        case TOGGLE_FALSE:
            return {...state, edit:false}
        case GET_ONE_PRODUCT:
            return {...state, product:action.payload, loading : false}
        default:
           return state;
    }
}

export default productReducer