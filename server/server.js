const express = require("express");
const cors = require("cors");
const path = require("path");
const controller = require("controller.js")

const app = express(); 

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../public"))); 


const port = process.env.PORT || 4005; 

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
}); 