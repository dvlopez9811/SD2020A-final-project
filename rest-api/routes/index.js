const express = require('express');
const router = express.Router();

const Person = require('../models/person');

/**
 * @swagger
 * /:
 *  get:
 *      summary: Retorna una lista de todos los usuarios
 *      description: Retorna una lista de todos los usuarios
 *      responses:
 *          '200':
 *              description: Respuesta exitosa
 *              content:
 *                  application/json:
 *                      schema:
 *                          ArrayOfUsers:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: integer
 *                                      name:
 *                                          type: string
 *                              example:
 *                                  - id: 2333458458354
 *                                    name: Job
 */
router.get('/', async (req, res) => {
    const peoples = await Person.find();
    res.json(peoples)
});

/**
 * @swagger
 * /add:
 *  post:
 *      summary: Inserta un usuario en la base de datos
 *      description: Inserta un usuario en la base de datos
 *      requestBody:
 *          description: Usuario para agregar a la base de datos
 *          content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *          required: true
 *      responses:
 *          "201":
 *              description: Usuario creado con éxito
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: integer
 *          default:
 *              description: Error inesperado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: integer
 */
router.post('/add', async (req, res) => {
    const person = new Person(req.query);
    await person.save();
    res.json(person)
});

module.exports = router;
