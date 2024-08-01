require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app =  express();

 
 const upload = require('./middleware/multer.middleware');
 const {uploadOnCloudinary} = require('./utils/cloudinary');  



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
app.use('/api/v1/blog',authenticateUser, blogRouter)

app.post('/api/v1/upload', upload.single('image') ,async (req,res)=>{
    try {
        const filePath = req.file.path;
        //upload file to cloudinary
        const result = await uploadOnCloudinary(filePath,'Blog');
        console.log('result ', result);
        res.json({url:result.secure_url})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed to upload image"})
    }
})

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

