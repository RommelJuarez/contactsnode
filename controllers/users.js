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
const createContact=async(req,res)=>{
    try {
        const user={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            favoriteColor:req.body.favoriteColor,
            birthday:req.body.birthday
        };
        const response= await conn.getDB().db('webservices').collection('users').insertOne(user);
        res.status(204).send();
        
        
    } catch (error) {
        console.log('Error creating user: ',error);
        res.status(500).json({error:'Error creating user'}); 
    }
};

const updateContact=async(req,res)=>{
    const userId=new ObjectId(req.params.id);
    try {
        const user={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            favoriteColor:req.body.favoriteColor,
            birthday:req.body.birthday
        };
        const result=await conn.getDB().db('webservices').collection('users').replaceOne({_id:userId},user);
        res.status(204).send();
    } catch (error) {
        console.log('Error updating user: ',error);
        res.status(500).json({error:'Error updating user'});
    }
};

const deleteContact=async(req,res)=>{
    const userId=new ObjectId(req.params.id);
    try {
        const response=await conn.getDB().db('webservices').collection('users').deleteOne({_id:userId},true);
        res.status(204).send();
    } catch (error) {
        console.log('Error deleting user: ',error);
        res.status(500).json({error:'Error deleting user'});
    }
};

module.exports={
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact,
};