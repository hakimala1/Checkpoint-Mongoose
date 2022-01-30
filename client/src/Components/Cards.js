import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneProduct, removeProduct, toggleTrue } from '../redux/actions/productActions';

function Cards({el}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleDelete=()=>{
        if (window.confirm('Are you sure'))
        {dispatch(removeProduct(el._id))}
    }
    return <div>
        <Card style={{ width: '18rem' }}>
            <Card.Header></Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Name product : {el.nameProduct}</ListGroup.Item>
                <ListGroup.Item>Description: {el.discProduct}</ListGroup.Item>
                <ListGroup.Item>Prix : {el.prixProduct}</ListGroup.Item>
            </ListGroup>
            
                <Button variant="info" onClick={()=>{dispatch(getOneProduct(el._id));dispatch(toggleTrue());navigate('/AddEdit')}}>Edit</Button>
                
            <Button variant="danger" onClick={handleDelete}>Delete</Button> 
          
        </Card>

    </div>;
}

export default Cards;
