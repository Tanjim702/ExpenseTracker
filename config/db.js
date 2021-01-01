const mongoose = require('mongoose')
const colors = require('colors')
const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.DB_URI,{
           useNewUrlParser:true,
           useUnifiedTopology:true,
           useCreateIndex:true 
        })
        console.log(`Database connected: ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(`Error : ${error}`.red)
        process.exit(1)
    }
}
module.exports = connectDB