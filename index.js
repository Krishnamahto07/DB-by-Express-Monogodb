const express = require("express");
const app = express();

// load config value
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to Parse json request body
app.use(express.json());

// import routes for Todo API
const todoRoutes = require("./routes/todos");

// mount the todo API routes
app.use("/api/v1",todoRoutes);

app.listen(PORT, ()=>{
    console.log(`Server Listen at ${PORT}`);
})

// DB connection
 const dbConnect = require("./config/database");
 dbConnect();

// default route 
app.get("/",(req,res)=>{
    res.send(`<h1>HOME PAGE </h1>`);
})








