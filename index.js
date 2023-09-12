const express = require("express")
const app = express()

require("./conn.js")
app.use(express.json())
const BR = require("./Routes/BlogRoutes.js")
app.use("/blogs",BR)
const UR = require("./Routes/UserRoutes.js")
app.use("/user",UR)
const PR = require("./Routes/ProductRoutes.js")
app.use("/product",PR)

app.get("/",async(req,res)=>{
    try {
        res.json({msg:"Server running"})
    } catch (error) {
        res.json({"msg":"SMO"})
    }
})

app.listen(5000)