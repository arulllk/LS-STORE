require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app =  express();

 
 const upload = require('./middleware/multer.middleware');




const connectDB = require('./db/connection');
const notFoundMiddleware = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authenticateUser = require('./middleware/authentication');

//router
const authRouter = require('./routes/auth');
const blogRouter = require('./routes/blog');

app.use(express.json())


//route
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/blog',  upload.single('image'), blogRouter)

//error handlers
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);




const port = process.env.PORT ? parseInt(process.env.PORT,10) : 4000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Server is listening on port no ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();

