const mongoose = require ('mongoose')

const TicketSchema = new mongoose.Schema({
    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Event',
        required:true
    },
    user:{
        type:String,
        required:true
    },
    seatNumber:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model("Ticket",TicketSchema)