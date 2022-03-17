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

let nameArr = []; 

app.use(express.static(path.join(__dirname, "../public"))); 

// Roll
app.get('/', (req, res) => {
    // rollbar.info("we got something")
    res.sendFile(path.join(__dirname, '../public'))
})

// app.get('/', (req, res) => {
//     rollbar.info("HTML served successfully")
//     rollbar.info("Someone got the list of students to load"); 
//     res.status(200).send(students)
// })

app.post('/names', (req, res) => {
    let {name} = req.body

    nameArr.push(name)
    rollbar.info("we added a name")
    res.status(200).send(nameArr)

})


// command d
const port = process.env.PORT || 5501; 

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
}); 