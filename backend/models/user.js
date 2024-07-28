const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema =   new mongoose.Schema({
    firstname:{type:String,required:[true,'Please provide your name'],minlength:4, maxlength:20, unique:true },
    lastname:{type:String,required:[true,'Please provide your name'],minlength:4, maxlength:20 },
    email:{type:String, required:[true,'Please provide your email'], validate:[validator.isEmail,'Please enter a valid email id'], unique:true},
    password:{type:String,required:[true, 'Please Enter password']}  
},{timestamps:true})


userSchema.pre('save',async function (next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

userSchema.methods.createJWT = function () {
    return jwt.sign(
        {userId:this._id,name:this.name},
        process.env.JWT_SECRET,
        {
            expiresIn:process.env.JWT_LIFETIME
        }
    )
}

userSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword,this.password)
    return isMatch;
}

module.exports =  mongoose.model('User',userSchema);