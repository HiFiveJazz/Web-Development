import express from "express";
const app = express(); 
const port = 3000;

app.get("/",(req, res)=>{
  // console.log(req.rawHeaders);
  res.send("<h1>Hello!</h1>")
})
app.get("/about",(req, res)=>{
  // console.log(req.rawHeaders);
  res.send("<h1>+1 123-456-7890</h1>")
})
app.get("/contact",(req, res)=>{
  // console.log(req.rawHeaders);
  res.send("<p>My name is Jasmeet, blah blah blah</p>")
})

app.listen(port, ()=> {
  console.log(`Listening on port ${port}.`);
});

