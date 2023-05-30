const app = require('./app');
const connect = require('./db/db');

app.listen(process.env.PORT,async()=>{
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
