const express=require('express');
const app=express();
const mongoConn=require('./db/dbconnetion');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
app.use('/',require('./routes'));




mongoConn.initDB((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('DATABASE CONNECTED');
    }
});

const port=process.env.PORT || 8080;
app.listen(port,()=>{console.log(`Running on port: ${port}`)});