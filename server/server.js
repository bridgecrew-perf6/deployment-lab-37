const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express(); 
app.use(express.json());
app.use(cors());


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: 'bee30b5ecc5a40619b1819c04c4fe877',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.static(path.join(__dirname, "../public"))); 

app.get('/', (req, res) => {
    rollbar.info("we got something")
    res.sendFile(path.join(__dirname, '../public'))
})

// app.get('/', (req, res) => {
//     rollbar.info("HTML served successfully")
//     rollbar.info("Someone got the list of students to load"); 
//     res.status(200).send(students)
// })




const port = process.env.PORT || 4005; 

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
}); 