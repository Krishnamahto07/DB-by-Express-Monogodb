const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then( ()=> console.log("DB ka connection is succesful"))
    .catch( (error) => {
        console.log("Issue in DB connecting");
        console.log(error.message);
        //Homework
        process.exit(1);
    });
}
module.exports = dbConnect;