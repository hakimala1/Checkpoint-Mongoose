const mongoose=require('mongoose')
const schema = mongoose.Schema

const productSchema=new schema({
    nameProduct : {
        type:String,
        required : true
    },
    discProduct : {
        type:String,
        required : true
    },
    prixProduct : {
        type:Number,
        required : true
    },
})

module.exports=mongoose.model('Product',productSchema)