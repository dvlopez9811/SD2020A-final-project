const express = require('express');
const router = express.Router();

const Person = require('../models/person');

router.get('/', async (req, res) => {
    const peoples = await Person.find();
    console.log(peoples);
    res.render('index', {
        peoples
    });
});

router.post("/add", async (req, res) => {

    const person = new Person(req.body);
    await person.save();
    res.redirect('/');
});
module.exports = router;
