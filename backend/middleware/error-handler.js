const errorHandlerMiddleware = (err,req,res,next) => {  
  console.log('comes inside middleware err is' , err); 
    let customError = {
        // set default error 
        statusCode:err.statusCode || 500,       
        msg: err.message || 'Some thing went wrong',
        errors:err.errors || null
    }
     
    if (err.code && err.code === 11000) {     
        //customError.msg = `${ Object.keys(err.keyValue)} already taken`
        customError.msg = 'Duplicate key error'
        const tempError = {}
        const field =  Object.keys(err.keyValue)[0];      
        tempError[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} already exist`
        customError.errors = tempError;        
    }
    
  if(err.name === 'ValidationError') {
    customError.statusCode =  400;    
    const tempError =  Object.keys(err.errors).reduce((acc,key)=>{
        acc[key] = err.errors[key].message
        return acc;
    },{})
    customError.errors = tempError;
    customError.msg = 'Validation Failed'
  }


    //return res.status(500).json({ err })
    return res.status(customError.statusCode).json({status:'Error',message:customError.msg, errors:customError.errors})
}

module.exports = errorHandlerMiddleware;