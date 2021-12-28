var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser');
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

let projectData = {};

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/generateformdata', function (req, res) {
    let formdata = {};
    formdata["key"] = process.env.API_KEY;
    res.json(formdata);
    res.send(formdata);
})

function addData(req, res) {
    projectData['agreement'] = req.body.agreement;
    projectData['confidence'] = req.body.confidence;
    projectData['irony'] = req.body.irony;
    projectData['subjectivity'] = req.body.subjectivity;
    res.send(projectData);
}

app.get('/all', function (req, res) {
    res.send(projectData);
});

app.post('/adddata', addData);
