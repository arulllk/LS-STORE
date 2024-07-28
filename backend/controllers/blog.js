const Blog = require('../models/blog');
const {  NotFoundError, BadRequestError } = require('../errors');

const createBlog = async (req,res) => {
    const blog = await Blog.create({...req.body});
    res.status(201).json({
        "status": "success",
        "message": "Blog created successfully",
        "data":{
            id:blog.id,
            title:blog.title
        }
    })
}

module.exports = { createBlog }
