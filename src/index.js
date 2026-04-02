const mongoose = require("mongoose");
const express = require("express");
const route  = require("./Routes/Userroutes")

const app = express();
app.use(express.json())

const port = 5000; 

const mogourl = "mongodb+srv://anmol:2AgmSHvnyx59HKNf@backend.rfkwu1k.mongodb.net/?appName=backend"

mongoose.connect(mogourl)

.then(()=> console.log(` mongo db connect`))
.catch((e)=>console.log(` mongo db error${e}`))

app.use("/" , route)


app.listen(port,() => {console.log(`Server is running on port ${port}  `)})

