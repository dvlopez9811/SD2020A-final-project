const express = require('express');
const router = express.Router();

const Person = require('../models/person');

router.get('/', async (req, res) => {
    const peoples = await Person.find();
    res.json(peoples)
});

router.post('/add', async (req, res) => {
    const person = new Person(req.query);
    await person.save();
    res.json(person)
});

module.exports = router;
