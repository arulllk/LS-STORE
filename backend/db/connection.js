const mongoose = require('mongoose');

const connectDB   = (url) => {
    return mongoose.connect(url,{     
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log(`Connected to Db`))
    .catch((err)=>console.log(`err is `, err))
}

module.exports = connectDB;
 