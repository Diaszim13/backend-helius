"use strict";
const User = require('../models/User.model');
const express = require('express');
const router = express.router();
router.get('/', (req, res) => { });
router.post('/createUser', (req, res) => {
    console.log(req.body);
    if (req.body) {
        User.create(req.body).then((newUser) => {
            console.log(newUser);
        });
    }
});
