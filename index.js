const express = require('express');
const dotenv = require("dotenv");
dotenv.config({path: '.env'})
const { checkDB } = require('./src/database.config');

checkDB()

console.log(process.env.APP_PORT)
const PORT = process.env.APP_PORT | 4000
const app = express()

app.get("/",(req,res) => {
    res.send("hola")
})

app.listen(PORT,()=>{
    console.log(`Servidor en el puerto ${PORT}`)
})