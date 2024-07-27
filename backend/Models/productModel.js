const mongoose =  require('mongoose')
const schema = mongoose.Schema

const productModel = new schema({    
    title:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true, 
    },
    rate:{
        type:String,
        require:true, 
    },
    stock:{
        type:String,
        require:true, 
    },
    price:{
        type:String,
        require:true, 
    },           
})

module.exports = mongoose.model("product",productModel)