const User = require('../models/user');
const {  BadRequestError , UnauthenticatedError } = require('../errors');

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

    if(!email && !password) {
        throw new BadRequestError('Email and password is required', {'email':'Email is required', 'password':'password is required'} );
    }

    if (!email) {
        throw new BadRequestError('Email is required', {'email':'Email is required'});
    }
    
    if (!password) {
        throw new BadRequestError('Password is required', {'password':'Password is required'});
    }

    const user = await User.findOne({email});

    if(!user) {
        throw new UnauthenticatedError('Invalid Credentials', {'email':'Your entered wrong email address'} )
    }

    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched) {
        throw new  UnauthenticatedError('Invalid Credentials', {'password':'Password is not matching'})
    }

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
