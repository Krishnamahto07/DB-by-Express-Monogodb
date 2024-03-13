const Todo = require("../models/Todo")

exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Todo Delete",
        })
    }
    catch(err){
        console.error(err)
        res.status(500)
        .json({
            sucess:false,
            // error:err.message,
            message:"Server error Something wrong "
        });
    }
}