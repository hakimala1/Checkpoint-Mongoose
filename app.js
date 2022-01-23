const express = require('express');
const connectDB=require('./config/db')

const app=express()
//connection base de données
connectDB();

app.use(express.json())

app.use('/api/products',require('./routes/product'))

port=process.env.PORT || 6000

app.listen(port,()=>console.log(`server started on ${port}`))
