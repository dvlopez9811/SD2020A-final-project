const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({name:String},{versionKey:false});

module.exports = mongoose.model('persona', PersonSchema);
