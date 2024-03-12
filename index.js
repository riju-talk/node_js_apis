const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("server is listening")
})

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api/users',require('./routes/api/users'))