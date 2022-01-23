const Product = require("../Models/Product")

exports.addProduct=async(req,res)=>{
    const{nameProduct,discProduct,prixProduct}=req.body
    try {
        const product= new Product({
            nameProduct,discProduct,prixProduct
        })
        await product.save()
        res.send({msg : 'product added',product})
    } catch (error) {
        res.status(500).send('error server')
    }
}

exports.getProduct=async(req,res)=>{
    
    try {
        const products=await Product.find()
        res.send(products)
    } catch (error) {
        res.status(500).send('error server')

    }
}

exports.deleteProduct=async(req,res)=>{
    const {productId}=req.params
    try {
        await Product.findByIdAndDelete(productId)
        res.send('product deleted')
    } catch (error) {
        res.status(500).send('error server')
    }
}

exports.updateProduct=async(req,res)=>{
    const {productId}=req.params
    try {
        await Product.findByIdAndUpdate(productId,{$set:{...req.body}})
        res.send('product updated')
    } catch (error) {
        res.status(500).send('error server')
    }
}

exports.getOneProduct=async(req,res)=>{
    const {productId}=req.params
    try {
        const product =await Product.findById(productId)
        res.send(product)
    } catch (error) {
        res.status(500).send('error server')
    }
}