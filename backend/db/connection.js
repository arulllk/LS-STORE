const mongoose = require('mongoose');
// const connectDB  = (url) => {
//     return mongoose.connect(url,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true
//     })
//     .then(()=>console.log('Connected to DB'))
//     .catch((err)=> console.log(err))
// }


const connectDB = async (url) => {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to DB');
    } catch (error) {
      console.error('Error connecting to DB:', error);
      throw error; // Rethrow the error to be caught in the `start` function
    }
  };

 

module.exports = connectDB;