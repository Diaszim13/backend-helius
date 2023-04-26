"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { User } = require('../models/User.model');
var express = require('express'); //aqui to usando var por q da erro se for usar const vai toma no cu node
var router = express.Router();
router.get('/', (req, res) => { });
router.post('/createUser', (req, res) => {
    console.log(req.body);
    if (req.body) {
        User.create(req.body).then((newUser) => {
            console.log(newUser);
        });
    }
});
router.get('/users', (req, res) => {
    User.findAll().then((res) => res(res));
});
module.exports = router;
