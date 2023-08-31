const express = require('express');

const app = express();
const env= require("dotenv");
const { adminRoutes } = require('./routes/admin/adminRoute');
env.config()


let PORT = process.env.PORT


app.use('/admin',adminRoutes)

app.listen(PORT,()=>{
    console.log(`This serer is running on ${PORT}`)
})