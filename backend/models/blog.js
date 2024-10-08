const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{type:String,required:[true,'Title cant be empty'], minlength:5, maxlength:40 },
    content:{type:String,required:[true,'Blog cant be empty'] },
    topic:{type:String, },
    seoTitle:{type:String},
    seoDescription:{ type:String},
    image:{type:String,required:[true,'Please add image']},
    altImage:{type:String,required:[true, 'Please price alt text to show on image for seo']},
    status:{type:Boolean, default:false},
    slug:{type:String,unique:true},
    createdBy:{type:mongoose.Types.ObjectId, ref:'User'}
},{timestamps:true})


blogSchema.pre('save',async function(next){    
    console.log('this is  ');
    console.log(this);
    // check if the title is modified
    if(!this.isModified('title')){
        console.log('comes inside slug creations');
        // if title is not modified skip the slug generation
        return next();
    }

    //Generate base slug from the title
    const slugBase =  this.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    let slug = slugBase;
    let suffix = 1

    // ensure slug is unique  by adding suffix if necessary
    while(await mongoose.models.Blog.findOne({slug})){
        slug = `${slugBase}-${suffix}` 
    }
    console.log('slug ', slug);
    this.slug = slug;
    next();   
})


module.exports = mongoose.model('Blog',blogSchema)