const mongoose = require("mongoose")
const escapedPassword = encodeURIComponent("#Y1a2h3y4a5");
const db = mongoose.connect(`mongodb://yahyasaadme:${escapedPassword}@ac-8kep9r2-shard-00-00.er1hajy.mongodb.net:27017,ac-8kep9r2-shard-00-01.er1hajy.mongodb.net:27017,ac-8kep9r2-shard-00-02.er1hajy.mongodb.net:27017/wool?ssl=true&replicaSet=atlas-z7zirc-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("DB Connected")).catch((e)=>
//const db = mongoose.connect(`mongodb://127.0.01:27017/wool`, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("DB Connected")).catch((e)=>
{
  console.log(e);
})
