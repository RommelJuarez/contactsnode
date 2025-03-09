const conn=require('../db/dbconnetion');
const ObjectId=require('mongodb').ObjectId;
const getAll=async(req,res)=>{
    try {
        const result=await conn.getDB().db('webservices').collection('users').find().toArray();
        res.setHeader('Set-Content-Type','application/json');
        res.status(200).json(result);
    } catch (error) {
        console.log('Error loading data from database: ',error);
        res.status(500).json({error:'Error loading data from database'});
    }
};

const getSingle=async(req,res)=>{
    const userId=new ObjectId(req.params.id);
    try {
        const result=await conn.getDB().db('webservices').collection('users').find({_id:userId}).toArray();
        res.setHeader('Set-Content-Type','application/json');
        res.status(200).json(result[0]);
    } catch (error) {
        console.log('Error loading data from database: ',error);
        res.status(500).json({error:'Error loading data from database'});
    }
};

module.exports={
    getAll,
    getSingle,
};