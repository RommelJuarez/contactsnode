const dotenv=require('dotenv');
dotenv.config();
const mongoClient=require('mongodb').MongoClient;

let database;

const initDB=(callback)=>{
    if(database){
        console.log('database is already initialized');
        return callback(null,database);
    }
    mongoClient.connect(process.env.DB_URI).then((client)=>{
        database=client;
        callback(null,database);
    }).catch((err)=>{
        callback(err);
    });
};

const getDB=(callback)=>{
    if(!database){
        throw Error('Database is not initialized');
    }
    return database;
};

module.exports={
    initDB,
    getDB,
};