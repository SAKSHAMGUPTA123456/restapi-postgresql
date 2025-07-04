const pool=require('../database/db')
const products=async(req,res)=>{
  const {sort,category,limit,page}=req.query
  let ifnotbasequery='select * from products'
  let basequery=''
  let finalquery='select * from products where'
  let first=parseInt(limit)
  let pages=parseInt(page)
  let second=(pages-1)*first
  console.log(second)
  if (category) {
      basequery += ` category ilike '%${category}'`
    }
  if(sort=='desc'){
 basequery+=' order by id desc'
  }
  if(sort=='asc'){
  basequery+=' order by id asc'
  }
  if(limit){
  basequery+=` LIMIT ${limit}`
}
if(page){
  basequery+=` offset ${second}`
}
  if(!category){
    ifnotbasequery+=basequery
    console.log(ifnotbasequery)
  let fv=await pool.query(ifnotbasequery)
  return res.status(200).json({details:fv.rows})
  }
  if(basequery.length>0){   
    finalquery+=basequery
    console.log(finalquery)
let  fg=await pool.query(finalquery)
return res.status(200).json({details:fg.rows})
  }
else{
 let g=await pool.query(ifnotbasequery)
 return res.status(200).json({details:g.rows})
}
}
module.exports={products}