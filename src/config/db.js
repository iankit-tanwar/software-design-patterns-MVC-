const express= require('express')

const mongoose = require('mongoose');
const env= require("dotenv");
env.config()

console.log()
console.log(process.env.MOONGO_USER)

mongoose.connect(`mongodb+srv://${process.env.MOONGO_USER}:${process.env.MOONGO_PASS}@${process.env.MOONGO_SERVER}.6sujrau.mongodb.net/?retryWrites=true&w=majority`)
.then(d=>console.log('connect'))
.catch(e=>console.log('error',e))

exports.mongoose= mongoose;