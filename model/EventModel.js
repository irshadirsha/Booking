const mongoose = require ('mongoose')

const EventSchema= new mongoose.Schema({
    name:{
        type:String,
        required:ture
    },
    date:{
        type:date,
        required:ture
    },
    description:{
        type:String,
    },
    tickets:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Ticket'
        }
    ],
})

module.exports=mongoose.model("Event",EventSchema)