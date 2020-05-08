/* B"H
*/
const express = require('express');

const users = require('../models/Users');

const water = require('../models/Water');

const router = express.Router();

router

    .get('/water', (req, res)=> res.send(water))
    .post('/water/add', (req, res) => res.send(water.add(req.body.water)))
    .post('/water/getUserData', (req, res)=> res.send(water.getUserData(req.userId)) )
    .post('/water/delete', (req, res) => {
        runs.deleteWater(req.userId);
        res.send({ success: true })
    })

module.exports = router;