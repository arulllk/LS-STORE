const User = require('../models/user');

const register = async (req,res,next)=> {
    const user = await User.create({...req.body});
    const token = user.createJWT();
    res.status(201).json({
        status: 'success',
        message: 'User Registered successfully',
        token,
        data: {
            'id': user.id,
            'firstname':user.firstname,
            'lastname':user.lastname,
            'email':user.email
        }
    })
    res.status(201).json({user:{name:`${user.firstname} ${user.lastname}`},success:true,toke:token});  
}

const login = async (req,res,next) => {
    const { email,password } = req.body;
    const user = await User.findOne({email});
    const token = user.createJWT();
    res.status(200).json({
        status:"Success",
        message:'User logged in successfully',
        token,
        data:{
            id:user.id,
            firstName:user.firstname,
            lastName:user.lastname,
            email:user.email
        } 
    })
}

module.exports = { register,login } 
