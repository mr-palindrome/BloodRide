const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeUrls = require('./routes/routes');
const cors = require('cors')
dotenv.config()
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
mongoose.connect(process.env.Database_Access, ()=>{console.log('Database Connected Successfully')})
app.use(express.json())
app.use('/app',routeUrls);
app.use(cors())
app.listen(4000, ()=>{
  console.log('server is running 4000');

})