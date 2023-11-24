const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const fs = require('fs'); 
const app = express ();
const PORT = 8000;


app.use(cors());
app.use(bodyParser.json());
app.post('/add', (req, res) => {

    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const sum = parseInt(num1) + parseInt(num2);

    const data = sum.toString();
    try { 
    fs.writeFileSync('file.txt', data); 
    console.log("File has been saved."); 
    } catch (error) { 
    console.error(err); 
} 

    res.json({sum})
})
app.listen(PORT, () => {
    console.log("Server Listening on PORT:",PORT);
  });

  module.exports = app;