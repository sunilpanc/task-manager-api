const express = require('express');
require('./db/mongoose');
const userRouter = require('./router/user');
const taskRouter = require('./router/task');

const app = express();
const port = process.env.PORT;

app.use(express.json()); // converting to direct into json format
app.use(userRouter); //for external user routing 
app.use(taskRouter);

app.listen(port, ()=>{
    console.log('Server is up on port ' + port);
})




