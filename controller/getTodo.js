const Todo = require('../models/Todo');
exports.getTodo = async(req,res) =>{
    try{
        // fetch all data
        const todos = await Todo.find({})

        // response update
        res.status(200)
        .json({
            sucess:true,
            data:todos,
            message:"Entire todo data is fetched",
        });
    }
    catch(err){
        console.error(err)
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:"Server error"
        });

    }
}
exports.getTodoById = async(req,res) =>{
    try{
        const id = req.params.id;
        const todo = await Todo.findById({ _id:id})

        if(!todo){
            return res.status(404).json({
                sucess:false,
                message:`No data found at ${id}`
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data found`
        })
    }
    catch(err){
        console.error(err)
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:"Server error Something wrong "
        });
    }
}