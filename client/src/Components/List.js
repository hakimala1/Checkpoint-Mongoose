import React, { useEffect } from 'react';
import Cards from './Cards';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/productActions';


function List() {

  const products=useSelector(state=>state.productReducer.products)
  const dispatch=useDispatch()
    // get products
  useEffect(()=>{
    dispatch(getAllProducts())

  },[])
  return <div className='carte'>
   {products.map(el=><Cards key={el._id} el={el}/>)}
  </div>;
}

export default List;
