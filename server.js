const express = require("express")
const app = express();

const PORT = process.env.PORT | 5000;

app.get('/',(req,res)=>{
    res.json({message:"Hello, I'm from backend !"})
})

app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}...`)
})