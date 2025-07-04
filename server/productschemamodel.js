const mongoo=require('mongoose')
const userschema=new mongoo.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

    
    featured:{
    type:Boolean,
    default:false
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdAt:{
type:Date,
default:Date.now()
    },
    company:{
type:String,
enum:{
    values:["apple","samsung","dell","mi"]
}
    }
})


const User=mongoo.model('Product',userschema)
module.exports=User