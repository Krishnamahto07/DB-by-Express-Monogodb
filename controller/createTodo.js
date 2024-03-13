const Todo = require("../models/Todo");

// define Route handler
exports.createTodo = async(req,res)=>{
    try{
        // extract title and description from reqest body
        const {title,description} = req.body;
        // create new Todo object and inserting in DB
        const response = await Todo.create({title,description});
        res.status(200).json(
            {
                sucess:true,
                data: response,
                message:"Entery created Successfull"
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                sucess:false,
                data:"Internal Server Error",
                message:err.message,
            }
        )
    }
}