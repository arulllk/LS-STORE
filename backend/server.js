const express = require('express');
const app = express();
const connectDB = require('./db/connection');
require('dotenv').config();
require('express-async-errors');


const notFoundMiddleware = require('./middleware/notFound');
const errorMiddleware =  require('./middleware/error-handler');




app.use(express.json())


app.get('/' ,(req,res)=> {
    res.send('<h1>Home page<h1>');
});


    
//error handler 
app.use(notFoundMiddleware);
app.use(errorMiddleware);



const port = process.env.PORT ?  parseInt(process.env.PORT,10) : 3000
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error)
    }
}


start() 
 
