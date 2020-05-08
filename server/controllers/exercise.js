/* B"H
*/
const express = require('express');

const users = require('../models/Users');

const exercise = require('../models/Exercise');

const router = express.Router();

router

    .get('/exercise', (req, res)=> res.send(exercise))
    .post('/exercise/add', (req, res) => res.send(exercise.add(req.body.exercise)))
    .post('/exercise/getUserData', (req, res)=> res.send(exercise.getUserData(req.userId)) )
    .post('/exercise/delete', (req, res) => {
        exercise.deleteExercise(req.userId);
        res.send({ success: true })
    })

module.exports = router;