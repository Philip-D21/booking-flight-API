const express = require("express");
const app = express();


const flight = require('./flight.json')
const port =3000;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req,res) => {
  res.send("Zuri Training");
});
// Get all flight
app.get('/flight',(req,res) =>{
return res.json(flight)
});
// post flight
app.post('/flight',(req,res) =>{
console.log(req.body)

return res.json({message: "new flight created"})
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
