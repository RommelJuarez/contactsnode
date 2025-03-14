const swaggerAutogen= require('swagger-autogen')();

const doc={
    info:{
        title:'API contacts',
        description:'Contacts api documentation'
    },
    host:'localhost:8080',
    schemes:['http','https']
};
const outputFile='./swagger.json';
const endpointsFiles=['./routes/index.js'];
swaggerAutogen(outputFile,endpointsFiles,doc);
