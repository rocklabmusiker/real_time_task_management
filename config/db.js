const mongoose = require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/taskDB',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to DB')
    }
    catch(error){
       console.error('could not connect to DB',error);
       process.exit(1)
    }
}

module.exports=connectDB;