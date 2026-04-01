const mongoose = require("mongoose");
const express = require("express");
const {evenodd} = require("./Controller/usercontroller")

const app = express();

const port = 5000; 

const mogourl = "mongodb+srv://anmol:2AgmSHvnyx59HKNf@backend.rfkwu1k.mongodb.net/?appName=backend"

mongoose.connect(mogourl)

.then(()=> console.log(` mongo db connect`))
.catch(()=>console.log(` mongo db error${e}`))

app.listen(port,() => {console.log(`Server is running on port ${port}  `)})

console.log(evenodd(2));