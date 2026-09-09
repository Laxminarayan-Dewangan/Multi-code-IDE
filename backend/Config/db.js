
const mongoose = require("mongoose");

const connectDB = async()=>{
    try{

       await mongoose.connect(process.env.MONGO_URI,{
        // useNewurlParser:true,
        // useUnifieldTopology: true
       });
        console.log("mongo  db connected");
        


    

    }catch(error){
        console.log(error)

    }
};
module.exports = connectDB;


// laxminarayandewangan224_db_user

// mongodb+srv://laxminarayandewangan224_db_user:Y78w2c3HQltIrO1l@ide.wsjkacp.mongodb.net/
// Y78w2c3HQltIrO1l

// 0vVIsn9WC66t11zZ

// NsuDTPuj2hA5LYfi
// mongodb+srv://laxminarayandewangan224_db_user:0vVIsn9WC66t11zZ@ide.wsjkacp.mongodb.net/?appName=IDE


// mongodb+srv://laxminarayandewangan224_db_user:Y78w2c3HQltIrO1l@ide.wsjkacp.mongodb.net/?appName=IDE