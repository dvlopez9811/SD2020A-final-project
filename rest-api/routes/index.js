const express = require('express');
const router = express.Router();

const Person = require('../models/person');

router.get('/', async (req, res) => {
    const peoples = await Person.find();
    console.log(peoples);
    res.json(peoples)
});

router.post("/add", async (req, res) => {

    console.log(req)
    var name = req.query.name;
    
    console.log("NOMBRE: +---"+name);
    const person = new Person(name);
    await person.save();
    //res.redirect('/');
});
module.exports = router;
