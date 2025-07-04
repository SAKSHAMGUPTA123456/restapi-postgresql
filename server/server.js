require('dotenv').config()
const express=require('express')
const app=express()
const cors=require('cors')
const router=require('./router/router')
const pool=require('./database/db')
const start=async()=>{
    const gh=await pool
    if(gh){
        console.log('connection succesfully postgresql')
    }
}
start()
// const gh=await pool
// console.log(gh)
app.use(cors())
app.use(express.json())
app.use('/m',router)
app.get('/',(req,res)=>{
res.send('hello server page')
})



const port=1000
app.listen(port,()=>{
console.log('hello')
})

