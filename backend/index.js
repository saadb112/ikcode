const mongoose = require('mongoose');
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const Dir = path.join(__dirname, "../client")
const port = process.env.PORT || 8000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// parse application/json
app.use(bodyParser.json())

app.use(express.json())
app.use(express.static(Dir))
app.get("/", ()=>{
    res.send("hello")
  })

  const database = (module.exports = () => {
    
    try {
      mongoose.connect(
        "mongodb+srv://saadb112:saadbhaizindabaad1@cluster0.vbcrt.mongodb.net/?retryWrites=true&w=majority"
      );
      console.log("Database connected succesfully");
    } catch (error) {
      console.log(error);
      console.log("Database connection failed");
    }
  });
  
  database();

  const schema = mongoose.Schema({
    name : String,
    email : String,
    msg : String
  })
  const User = mongoose.model("EVTechnologies", schema)
  app.post("/contact", async(req,res)=>{
    const {name, email, msg} = req.body
 const create = await User.create({
    name,
    email,
    msg
 })
const save =  await create.save()
res.send("send")
})
  app.listen(port, ()=>{
      console.log("started")
  })