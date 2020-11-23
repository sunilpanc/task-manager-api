const  { MongoClient, ObjectID } = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL,{ useNewUrlParser:true}, (error, client)=>{
    if(error){
        return console.log("Unable to connect with database!");
    }
    const db = client.db(databaseName);

    // db.collection('users').deleteMany({
    //     age:21
    // }).then((result)=>{
    //     console.log(result.deletedCount);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    db.collection('tasks').deleteOne({
        "description" : "React JS"
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })


    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error);
    // })


    // db.collection('users').updateOne({
    //     _id: new ObjectID("5f6c17784614395704e17d02")
    // },{
    //     $set:{
    //         name:'Sunil'
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error)
    // })


    // db.collection('tasks').findOne({ _id: new ObjectID("5f6a13729052430a3cb58919")},(error,task)=>{
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed:false}).toArray((error, task)=>{
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log(task);
    // })

    // db.collection('users').insertOne({
    //     name:'Sunil Panchal',
    //     age:22
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Ankit',
    //         age:24
    //     },
    //     {
    //         name:'Vikram',
    //         age:21
    //     }
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents!');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Node JS',
    //         completed:true
    //     },
    //     {
    //         description:'React JS',
    //         completed:false
    //     },
    //     {
    //         description:'React JS',
    //         completed:true
    //     }
    // ],(error, result)=>{
    //     if(error) 
    //         return console.log('Unable to insert element!');
    //     console.log(result.ops);
    // })
    

})