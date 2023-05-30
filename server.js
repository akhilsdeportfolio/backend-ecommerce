const app = require('./app');
const connect = require('./db/db');

app.listen(5000,async()=>{
    console.log("Connectin to DB")
    try{
    await connect()
    console.log("Connected")
    }
    catch(e)
    {   
        console.error(e);
    }
});