var express = require('express');
const {Machine} = require('../models/Machine.model');
var router = express.Router();

router.get('/', Machine.getAll());

