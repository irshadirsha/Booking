const mongoose = require ('mongoose')
const connectDb = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Connected!'));
    } catch (error) {
        console.error(err.message);
    }
   
}

module.exports=connectDb