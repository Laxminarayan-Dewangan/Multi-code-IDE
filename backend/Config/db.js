
const mongoose = require("mongoose");

const connectDB = async()=>{
    try{

       await mongoose.connect(process.env.MONGO_URI,{
        // useNewurlParser:true,
        // useUnifieldTopology: true
       });
        console.log("mongo Db connected");
        


    

    }catch(error){
        console.log(error)

    }
};
module.exports = connectDB;


// laxminarayandewangan224_db_user

// mongodb+srv://laxminarayandewangan224_db_user:Y78w2c3HQltIrO1l@ide.wsjkacp.mongodb.net/
// Y78w2c3HQltIrO1l


// mongodb+srv://laxminarayandewangan224_db_user:Y78w2c3HQltIrO1l@ide.wsjkacp.mongodb.net/?appName=IDE