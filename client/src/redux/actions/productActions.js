
import axios from 'axios'
import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT, TOGGLE_FALSE, TOGGLE_TRUE } from '../types'
export const getAllProducts = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/products')
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)

    }

}

//Add Product
export const addNewProduct = (formData) => async (dispatch) => {

    try {
        await axios.post('/api/products', formData)
        dispatch(getAllProducts())
    } catch (error) {
        console.log(error)
    }
}

//Remove Product
export const removeProduct = (id) => async (dispatch) => {

    try {
        await axios.delete(`/api/products/${id}`)
        dispatch(getAllProducts())
    } catch (error) {
        console.log(error)
    }
}

//Update product
export const updateProduct=(id,formData)=> async(dispatch)=>{
    try {
        await axios.put(`/api/products/${id}`,formData)
        dispatch(getAllProducts())
    } catch (error) {
        console.log(error)
        
    }
}

export const toggleTrue=()=>{
    return {type : TOGGLE_TRUE}
}

export const toggleFalse=()=>{
    return {type : TOGGLE_FALSE}
    
}

export const getOneProduct=(id)=>async(dispatch)=>{

    try {
        const res = await axios.get(`/api/products/${id}`)
        dispatch({type:GET_ONE_PRODUCT, payload:res.data})
    } catch (error) {
        console.log(error)
    }

}