import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFalse } from '../redux/actions/productActions';

function Home() {
  const dispatch=useDispatch()
  return <div>
      <Link to='/AddEdit'>
      <Button variant="dark">Add New Product</Button>
      </Link>
      <Link to='/List'>
      <Button variant="info" onClick={()=>dispatch(toggleFalse())}>Products List</Button>
      </Link>
  </div>;
}

export default Home;
