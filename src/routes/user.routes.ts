
const User = require('../models/User.model');
const {express, Require, Response} = require('express');

const router = express.Router();

router.get('/', (req: any, res: any) => {});

router.post('/createUser', (req, res) => {
    console.log(req.body);
    
    if(req.body)
    {
        User.create(req.body).then((newUser: any) => {
            console.log(newUser);
            
        });
    }
});

module.exports = router;

