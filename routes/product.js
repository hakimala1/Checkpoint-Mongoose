const express = require('express')
const { addProduct, getProduct, deleteProduct, updateProduct, getOneProduct } = require('../Controlls/productControlls')
const Product = require('../Models/Product')
const route=express.Router()

route.get('/test',(req,res)=>{
    res.send("Le code est fonctionel")
})

//add product
route.post('/',addProduct)

//get all products
route.get('/',getProduct)


//delete by id

route.delete("/:productId",deleteProduct)

//update 

route.put("/:productId",updateProduct)

// get one product

route.get("/:productId",getOneProduct)
















module.exports=route