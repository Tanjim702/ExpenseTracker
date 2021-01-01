const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const db = require('./config/db')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
dotenv.config({path:'./config/config.env'})
const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/api/v1',require('./routes/transactionRoutes'))
app.use(express.static('app/build'))
app.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'app','build','index.html'))
})
app.get('/',(req,res)=>{
    res.send('Hello')
})


app.listen(process.env.PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`.yellow.bold);
    db();
})
