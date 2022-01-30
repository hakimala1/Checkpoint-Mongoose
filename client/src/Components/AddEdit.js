import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { addNewProduct, updateProduct} from '../redux/actions/productActions';
import '../App.css';



function AddEdit() {
    const navigate=useNavigate()
    const edit =useSelector(state=>state.productReducer.edit)
    const product =useSelector(state=>state.productReducer.product)
    const [formData, setFormData] = useState({ nameProduct: '', discProduct: '', prixProduct: 0 })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })  }
    const dispatch = useDispatch()
    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(addNewProduct(formData))
        navigate('/List')

    }
    const handleUpdate=(e)=>{
      
        dispatch(updateProduct(product._id,formData))
        navigate('/List')
    }
    useEffect(()=>{
        edit ? setFormData({nameProduct:product.nameProduct, discProduct:product.discProduct, prixProduct:product.prixProduct})
        :setFormData({ nameProduct: '', discProduct: '', prixProduct: 0 })
    },[product])



    return <div className='add'>

        <Form>


            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name Product</Form.Label>
                <Form.Control placeholder="Name..." name='nameProduct' value={formData.nameProduct} onChange={handleChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="Enter description" name='discProduct' value={formData.discProduct} onChange={handleChange} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Prix</Form.Label>
                <Form.Control type='number' placeholder="Prix..." name='prixProduct' value={formData.prixProduct}onChange={handleChange}  />
            </Form.Group>


           
               {edit?  <Button variant="primary" type="submit" onClick={handleUpdate}>Edit</Button>: 
               <Button variant="primary" type="submit" onClick={handleAdd}>Add</Button>
               }
            
        </Form>
    </div>;
}

export default AddEdit;
