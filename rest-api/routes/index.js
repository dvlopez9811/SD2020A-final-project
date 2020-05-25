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
 *              definitions:
 *                 ArrayOfUsers:
 *                   type: array
 *                   items:
 *                      type: object
 *                      properties:
 *                         id:
 *                           type: integer
 *                         name:
 *                           type: string
 *              examples:
 *                  application/json:
 *                        - id: 2333458458354
 *                          name: Job
 *                        - id: 1233345845822
 *                          name: Smith
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
 *      parameters:
 *         - in: query
 *           name: nombre
 *           required: true
 *           schema:
 *              type: string
 *           description: El nombre del usuario
 *      responses:
 *          "200":
 *              description: Usuario creado con éxito
  *              definitions:
 *                 ArrayOfUsers:
 *                   type: array
 *                   items:
 *                      type: object
 *                      properties:
 *                         id:
 *                           type: integer
 *                         name:
 *                           type: string
 *              examples:
 *                  application/json:
 *                        - id: 2333458458354
 *                          name: Job
 *          default:
 *              description: Error inesperado
 */
router.post('/add', async (req, res) => {
    const person = new Person(req.query);
    await person.save();
    res.json(person)
});

module.exports = router;
