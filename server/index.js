const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', true)
const connectDB = async ()=>{

    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fyp-mern.kehgjwk.mongodb.net/?retryWrites=true&w=majority`,
        err => {
            if(err) throw err;
            console.log('Connected to MongoDB')
        });
    }

connectDB()

app.post('/api/register', (req,res)=> {
    console.log(req.body)
    res.json({status:'ok'})
})

const PORT = 1337

app.listen(PORT, ()=> console.log(`Server start on port ${PORT}`))