const express = require ('express')
const Db= require('./config/connection')
require('dotenv').config()
const app=express()
Db()
app.use(express.json())
const PORT=process.env.PORT
app.get('/',(req,res)=>{
   res.send('its my server and its working properly')
})
// app.use('/api',router)
app.use('/api/events',require('./router/eventRouter'))
app.use('/api/tickets',require('./router/ticketRouter'))
app.listen(PORT,()=>{
    console.log("serverrunning in port->",PORT)
})