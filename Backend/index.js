const express = require("express");
const cors = require("cors")
const data = require("./data.json");
const app = express();
app.use(cors());

const port = 4000;

app.get('/',(req,res)=>{
    res.send(data);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})