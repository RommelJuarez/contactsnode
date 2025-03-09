const express=require('express');
const app=express();
const mongoConn=require('./db/dbconnetion');



mongoConn.initDB((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('DATABASE CONNECTED');
    }
});
app.use('/',require('./routes'));
const port=process.env.PORT || 8080;
app.listen(port,()=>{console.log(`Running on port: ${port}`)});