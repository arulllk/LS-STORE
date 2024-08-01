const Blog = require('../models/blog');
const {  NotFoundError, BadRequestError } = require('../errors');
const {uploadOnCloudinary} = require('../utils/cloudinary');  
const fs = require('fs');
const createBlog = async (req,res) => {
    //const blog = await Blog.create({...req.body});

 
    if(!req.file) {
        throw new BadRequestError ('Image is missing', {'image':'Image is required'});
    }

    console.log('req file ' , req.file);
    const { title , content, topic, seoTitle, seoDescription, altImage , slug } = req.body;
    const imagePath = req.file.path

    //upload image to cloudinary
    const result = await uploadOnCloudinary(imagePath,'Blog');
    console.log('image res ', result);
    console.log('req is ', req.body);
    const newBlog = new Blog({title , content, topic, seoTitle, seoDescription, altImage , slug , image:result.secure_url}) 
    await newBlog.save();
    //fs.unlinkSync(imagePath);


    res.status(201).json({
        "status": "success",
        "message": "Blog created successfully",
        "data":{
            blog:newBlog,
            image:result
        }
    })
}

module.exports = { createBlog }
