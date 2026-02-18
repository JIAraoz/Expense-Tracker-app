const express = require('express')
const app = express()
const port = 3000








app.get("/info",(req,res)=>{

    res.status(200).json({
        info:"esta es la informacion requerida"
    })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

