/* B"H
*/
const express = require('express');

const users = require('../models/Users');

const health = require('../models/Health');

const router = express.Router();

router

    .get('/health', (req, res)=> res.send(health))
    .post('/health/add', (req, res) => res.send(health.add(req.body.health)))
    .post('/health/getUserData', (req, res)=> res.send(health.getUserData(req.userId)) )
    .post('/health/delete', (req, res) => {
        health.deleteHealth(req.userId);
        res.send({ success: true })
    })

module.exports = router;