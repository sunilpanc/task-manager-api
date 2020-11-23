const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
})





// const me = new User({
//     name:'    Ankit    ',
//     email:'Ankit123@gmail.com',
//     password:'    panchal1234 '
// })

// me.save().then(()=>{
//     console.log(me);
// }).catch((error)=>{
//     console.log(error);
// })


// const myTask = new Task({
//     description:' Node JS ',
//     completed:true
// })

// myTask.save().then(()=>{
//     console.log(myTask);
// }).catch((error)=>{
//     console.log(error);
// })

