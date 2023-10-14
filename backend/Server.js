const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const todoroutes=require('./routes/todoroutes')

require('dotenv').config();

const app=express();

app.use(express.json());
app.use(cors());

const PORT=process.env.port ||5000;
app.use('/',todoroutes)


mongoose.connect(process.env.MONGO_URL).then(()=>console.log('connected successfully')).catch((error)=>console.log(error.message))

app.listen(PORT,()=>{
    console.log(`APP IS RUNNING ON PORT ${PORT}`)
})




