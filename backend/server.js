require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const productsRouter = require('./Routers/productRouters')

//middleware
app.use(express.json())

//router
app.use("/api/products", productsRouter)

//DB connected
mongoose.connect(process.env.DB)
.then(() => console.log("DB connected"))
.catch((err) => console.log(err.message))

//server connected
app.listen(process.env.PORT,()=>console.log("Server connected"))