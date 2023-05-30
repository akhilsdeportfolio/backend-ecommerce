const mongoose=require('mongoose');
require('dotenv').config();

const connect = ()=>{
    return mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@india-mumbai-cluster.ufxumzp.mongodb.net/?retryWrites=true&w=majority`,{ useNewUrlParser: true });
}


module.exports=connect;