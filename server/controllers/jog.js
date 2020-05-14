/* B"H
*/
const express = require('express');

const users = require('../models/Users');

const jog = require('../models/Jog');

const router = express.Router();

router

    .get('/jog', (req, res)=> res.send(jog))
    .post('/jog/add', (req, res) => res.send(jog.add(req.body.jog)))
    .post('/jog/getUserData', (req, res)=> res.send(jog.getUserData(req.userId)) )
    .post('/jog/delete', (req, res) => {
        jog.deleteJog(req.userId);
        res.send({ success: true })
    })

module.exports = router;