const express=require('express')
const router=express.Router()
const authtaking=require('../controller/products')
router.get('/products',authtaking.products)
module.exports=router
