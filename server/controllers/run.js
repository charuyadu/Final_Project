/* B"H
*/
const express = require('express');

const users = require('../models/Users');

const run = require('../models/Run');

const router = express.Router();

router

    .get('/run', (req, res)=> res.send(run))
    .post('/run/add', (req, res) => res.send(run.add(req.body.run)))
    .post('/run/getUserData', (req, res)=> res.send(runs.getUserData(req.userId)) )
    .post('/run/delete', (req, res) => {
        runs.deleteRun(req.userId);
        res.send({ success: true })
    })

module.exports = router;