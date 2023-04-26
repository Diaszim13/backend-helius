    import { Request, Response } from "express";

const {User} = require('../models/User.model');
var express = require('express');//aqui to usando var por q da erro se for usar const vai toma no cu node
var router = express.Router();

router.get('/', (req: any, res: any) => {});

router.post('/createUser', (req:Request, res:Response) => {
    console.log(req.body);    
    if(req.body)
    {
        User.create(req.body).then((newUser: any) => {
            console.log(newUser);
            
        });
    }
});

router.get('/users', (req:Request, res:Response) => {
    User.findAll().then((res: any) => res(res));
});


module.exports = router;

