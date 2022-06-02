const express = require('express');
const externalModule = require('./logger')
const wel = require('../logger/logger.js')
const date = require('../util/helper.js')
const validator = require('../validator/formatter.js');
const { json } = require('express/lib/response');




const router = express.Router();

router.get('/test-me', function (req, res) {
  
    externalModule.log()

    const result = wel.welcome + "Next :" + 'My second ever api!' + "Date:" +  date.printDate + "Month: " + date.printM + date.printBatch + 
    validator.trimS + validator.changeToUp + validator.changeToLw ;
    
    res.send(result)
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!' + "Date:" +  date.printDate + "Month: " + date.printM + date.printBatch)
});

router.get('/test-me2/:name', function (req, res) {
    let name = req.params.name
    res.send('My third name' + name)
});

router.get('/test-me3', function (req, res) {
    let box = ['debu', 'subha']
    res.send('My 4th api!' + JSON.stringify(req.query))
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason