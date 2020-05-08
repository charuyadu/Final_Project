
const express = require('express');
const path = require('path');

const exerciseController = require('./controllers/exercise');
const foodController = require('./controllers/food');
const healthController = require('./controllers/health');
const jogController = require('./controllers/jog');
const runController = require('./controllers/run');
const userController = require('./controllers/users');
const waterController = require('./controllers/water');

const app = express();
const port = 4000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(function(req, res, next) {
    const arr = (req.headers.authorization || "").split(" ");
    if(arr.length > 1 && arr[1] != null){
        req.userId = +arr[1];
    }
    next();
});

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static( __dirname + '/../client/dist') )
    .get('/', (req, res) => res.send('This class is awesome!') )
    .get('/exercise', exerciseController)
    .get('/food', foodController)
    .get('/health', healthController)
    .get('/jog', jogController)
    .get('/run', runController)
    .get('/users', userController)
    .get('/run', waterController)
    
    .use( (err, req, res, next ) => {
        console.error(err);
        const errorCode = err.code || 500;
        res.status(errorCode).send({ message: err.message });
    } )

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))