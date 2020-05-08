/* B"H
*/
const express = require('express');

const users = require('../models/Users');

const food = require('../models/Food');

const router = express.Router();

router

    .get('/food', (req, res)=> res.send(food))
    .post('/food/add', (req, res) => res.send(run.add(req.body.food)))
    .post('/food/getUserData', (req, res)=> res.send(food.getUserData(req.userId)) )
    .post('/food/delete', (req, res) => {
        food.deleteFood(req.userId);
        res.send({ success: true })
    })

module.exports = router;